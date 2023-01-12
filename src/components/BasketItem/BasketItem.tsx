import { useStore } from "effector-react"
import styled from "styled-components"
import BusketDelete from "../../icons/BusketDelete"
import { deleteBasketItem, IBasket } from "../../store/basket"
import useProductImages from "../../hooks/useImages"
import { $tgInfo } from "../../store/tgData"
import LoadImage from "../LoadImage/LoadImage"
import NotAImage from "../Product/NotImage"


const StyledBasketItem = styled.div<{dark: boolean}>`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    max-height: 100%;
    box-shadow: 8px 8px 11px ${props => props.dark? "#ffffff40" : "#00000040"};
    border-radius: 10px;
    margin-bottom: 20px;
`

const StyledBasketImg = styled.img`
    width: 20vw;
    height: 20vw;
    border-radius: 10px;
    margin-right: 10px  ;
`

const StyledBasketProps = styled.div<{dark: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    color: ${props => props.dark? 'white' : 'black'};
`

const StyledDeleteButton = styled.button<{dark: boolean}>`
    width: 20%;
    border: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: ${props => props.dark? 'white' : 'black'};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`


const BasketItem: React.FC<{data: IBasket, i: number}> = ({data, i}) => {
    const {dark} = useStore($tgInfo)
    const {images, isLoading} = useProductImages(data.data)
    

    return <StyledBasketItem dark={dark}>
        <div style={{display: 'flex', alignItems: "center", gap: 5}}>
            {isLoading? 
                <LoadImage/>
                : 
                images[0]? 
                    <StyledBasketImg src={images[0]}/>
                : 
                    <div style={{width: '20vw', padding: 5, boxSizing: 'border-box'}}><NotAImage/></div>
            }
            <StyledBasketProps dark={dark}>
                <div style={{marginTop: "10px", fontSize: 16, fontWeight: 500, width: '170px', wordWrap: 'break-word'}}>{data.data.name}</div>
                <div>
                    <h4 style={{fontWeight: 400, fontSize: 14}}>Количество: {data.counter} шт</h4>
                    <h4 style={{fontWeight: 400, fontSize: 14}}>Цена/ед.товара {data.data.salePrices[0].value}₽</h4>
                </div>
                <h3 style={{marginBottom: "10px", fontWeight: 600}}>{+data.data.salePrices[0].value * data.counter}₽</h3>
            </StyledBasketProps>
        </div>
        <StyledDeleteButton dark={dark} onClick={() => {deleteBasketItem(i)}}> <BusketDelete/> </StyledDeleteButton>
    </StyledBasketItem>
}

export default BasketItem