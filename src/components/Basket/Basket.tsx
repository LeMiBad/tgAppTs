import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import useOpen from "../../hooks/useOpeningSwitcher"
import { $basket } from "../../store/basket"
import { $tgInfo } from "../../store/tgData"
import BasketItem from "../BasketItem/BasketItem"
import BasketIconButton from "../BasketIcon/BasketIcon"


const enter = keyframes`
    0% {
        left: 100%;
    }
    
    100% {
        left: 0%;
    }
`
const exit = keyframes`
    0% {
        left: 0%;
    }
    
    100% {
        left: 100%;
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
    const {openState, switchHandler} = useOpen()
    const [curAnim, setCurAnim] = useState(enter)
    const basket = useStore($basket)
    const {dark} = useStore($tgInfo)
    // const [{imgIndex, slideState}, setCurImg] = useState<{imgIndex: number, slideState: string}>({imgIndex: 0, slideState: 'left'})
    

    const switched = () => {
        if(openState) {
            setCurAnim(exit)
            if(exitProductPage) exitProductPage()
            setTimeout(() => {
                switchHandler()
            }, 200)
        }
        else {
            setCurAnim(enter)
            switchHandler()
        }
    }

    const getSumOfValue = () => {
        return basket.reduce((acc, item) => {
            return acc + +item.data.salePrices[0].value * item.counter
        }, 0)
    }

    console.log(getSumOfValue())

    useEffect(() => {
        if(basket.length) {
            window.Telegram.WebApp.MainButton.show()
            window.Telegram.WebApp.MainButton.setParams({
                text: `Оформить заказ на ${getSumOfValue()}`,
                color: dark? '#ffffff' : '#000000',
                text_color: dark? '#000000' : '#ffffff'
            })
            window.Telegram.WebApp.onEvent('mainButtonClicked', switched)
        }
        else {
            window.Telegram.WebApp.offEvent('mainButtonClicked', switched)
            window.Telegram.WebApp.MainButton.hide()
        }
    })


    return (
        <StyledBasketWrapper dark={dark} anim={curAnim}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center', paddingRight: 15}}>
                <h1 style={{color: dark? 'white' : 'black'}}>Ваша корзина {basket.length? '' : 'пуста'}</h1>
                <BasketIconButton/>
            </div>
            <div style={{overflowY: 'scroll', height: '90vh', paddingTop: 10}}>
                {basket.map((product, i) => {
                    return <BasketItem key={product.data.code} data={product} i={i}/>
                })}
            </div>
        </StyledBasketWrapper>
    )
}

export default Basket