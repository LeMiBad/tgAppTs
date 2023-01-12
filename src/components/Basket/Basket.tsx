import { useStore } from "effector-react"
import styled, { keyframes } from "styled-components"
import { $basket } from "../../store/basket"
import { $tgInfo } from "../../store/tgData"
import BasketItem from "../BasketItem/BasketItem"
import BasketIconButton from "../BasketIconButton/BasketIconButton"
import ArrowIcon from "../../icons/ArrowIcon"
import usePage from "../../hooks/usePage"


const enter = keyframes`
    0% {
        left: 100%;
    }
    
    100% {
        left: 0%;
    }
`

const StyledBasketWrapper = styled.div<{anim: any, dark: boolean}>`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0%;
    padding: 15px 10px 10px 10px;
    animation: ${props => props.anim} 0.2s linear forwards;
    box-sizing: border-box;
    background-color: ${props => props.dark? 'black' : 'white'};
`



const Basket: React.FC<{exitProductPage?: () => void}> = ({exitProductPage}) => {
    const basket = useStore($basket)
    const {dark} = useStore($tgInfo)
    const {toProductList} = usePage()

    return (
            <StyledBasketWrapper dark={dark} anim={enter}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center', padding: '0 15px 10px 0'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                        <ArrowIcon func={toProductList}/>
                        <h1 style={{color: dark? 'white' : 'black', fontSize: 20}}>Ваша корзина {basket.length? '' : 'пуста'}</h1>
                    </div>
                    <BasketIconButton/>
                </div>
                <div style={{overflowY: 'scroll', height: '85vh', paddingTop: 10}}>
                    {basket.map((product, i) => {
                        return <BasketItem key={product.data.code} data={product} i={i}/>
                    })}
                </div>
            </StyledBasketWrapper>
    )
}

export default Basket