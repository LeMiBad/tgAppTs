import { useStore } from "effector-react"
import styled, { keyframes } from "styled-components"
import ArrowIcon from "../../icons/ArrowIcon"
import { $basket } from "../../store/basket"
import { $ProductPage } from "../../store/ProductPage"
import { $tgInfo } from "../../store/tgData"
import Basket from "../Basket/Basket"


interface IProps {
    exit: () => void
}

const enter = keyframes`
    0% {
        left: -100%;
    }

    100% {
        left: 0;
    }
`


const Wrapper = styled.div<{dark: boolean, anim: any}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    background-color: ${props => props.dark? 'black' : 'white'};
    padding: 5%;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: ${props => props.anim} 0.2s forwards;
`

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    box-sizing: border-box;
`

const ImgWrapper = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    img {
        width: 30vh;
        height: 30vh;
        border-radius: 30px;
    }
`

const InfoWrapper = styled.div`
    margin-top: 4px;
    margin-left: -6%;
    padding: 0 5%;
    width: 112%;
    box-sizing: border-box;
    p {
        max-height: 200px;
        overflow: scroll;
    }
`

const NameWrapper = styled.div<{dark: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        color: ${props => props.dark? 'white' : 'black'};
        font-size: 24px;
    }
    h2 {
        font-size: 20px;
        color: ${props => props.dark? 'white' : 'black'};
    }
`

const KindsWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow-x: scroll;
    margin: 30px 0;
`

const KindItem = styled.div<{dark: boolean}>`
    height: 10vh;
    background-color: ${props => props.dark? 'white' : 'black'};
    color: ${props => props.dark? 'black' : 'white'};
    padding: 20px 25px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`


const ProductPage: React.FC<IProps>  = ({exit}) => {
    const {dark} = useStore($tgInfo)
    const {name, price, description, img, kinds} = useStore($ProductPage)
    const basket = useStore($basket)


    // useEffect(() => {
    //     window.Telegram.WebApp.MainButton.hide()
    //     window.Telegram.WebApp.MainButton.show()
    //     window.Telegram.WebApp.MainButton.setParams({
    //         text: `Добавить в корзину +${price}`,
    //         color: dark? '#ffffff' : '#000000',
    //         text_color: dark? '#000000' : '#ffffff'
    //     })
    //     window.Telegram.WebApp.onEvent('mainButtonClicked', () => {
    //         addBasketItem({
    //             id: basket.length,
    //             counter: 1,
    //             name: name,
    //             desk: desk,
    //             price: price,
    //         })
    //     })
    // })

    return  <>
        <Wrapper anim={enter} dark={dark}>
            <Navbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <ArrowIcon func={exit}/>
                <Basket exitProductPage={exit}/>
            </Navbar>
            <ImgWrapper>
                <img src={img} alt="" />
            </ImgWrapper>
            <InfoWrapper>
                <NameWrapper dark={dark}>
                    <h1>{name}</h1>
                    <h2>{price}Р</h2>
                </NameWrapper>
                <h1 style={{fontSize: '24px', color: dark? 'white' : 'black'}}>Описание</h1>
                <p style={{color: dark? 'white' : 'black'}}>{description}</p>
                <KindsWrapper>
                    {/* kinds.length? {kinds.map(kind => <KindItem dark={dark} key={kind}>{kind}</KindItem>)} */}
                </KindsWrapper>
            </InfoWrapper>
        </Wrapper>
    </>
}

export default ProductPage