import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import useOpen from "../../hooks/useOpeningSwitcher"
import BasketIcon from "../../icons/BasketIcon"
import { $basket, deleteBasketItem } from "../../store/basket"
import { $tgInfo } from "../../store/tgData"


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
    background-color: ${props => props.dark? 'black' : 'white'};
`


const StyledBasketItem = styled.div<{dark: boolean}>`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 93%;
    max-height: 100%;
    box-shadow: 8px 8px 11px ${props => props.dark? "#ffffff40" : "#00000040"};
    border-radius: 10px;
    margin-bottom: 20px;
`

const StyledBasketImg = styled.div`
    min-width: 25vw;
    height: 25vw;
    border-radius: 10px;
    margin-right: 10px  ;
    background-size: contain !important;
    background: url('https://papik.pro/uploads/posts/2021-09/1631839563_11-papik-pro-p-krasivie-kvadratnie-risunki-12.jpg');
`

const StyledBasketProps = styled.div<{dark: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${props => props.dark? 'white' : 'black'};
`

const StyledDeleteButton = styled.button<{dark: boolean}>`
    /* margin: auto 10px auto 0; */
    width: 20%;
    font-size: 28px;
    border: 0;
    background-color: ${props => props.dark? 'white' : 'black'};
    color: ${props => props.dark? 'black' : 'white'};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

const Basket = () => {
    const {openState, switchHandler} = useOpen()
    const [curAnim, setCurAnim] = useState(enter)
    const basket = useStore($basket)
    const {dark} = useStore($tgInfo)


    const switched = () => {
        if(openState) {
            setCurAnim(exit)
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
            return acc + +item.price * item.counter
        }, 0)
    }


    useEffect(() => {
        if(basket.length) {
            window.Telegram.WebApp.MainButton.show()
            window.Telegram.WebApp.MainButton.setParams({
                text: `Оформить заказ на ${getSumOfValue()}`,
                color: dark? '#ffffff' : '#000000',
                text_color: dark? '#000000' : '#ffffff'
            })
        }
        else {
            window.Telegram.WebApp.MainButton.hide()
        }
    })


    return <>
        {(openState)? <>
            <StyledBasketWrapper dark={dark} anim={curAnim}>
                <h1 style={{color: dark? 'white' : 'black', margin: '0px 10px 20px 0px'}}>Ваша корзина {basket.length? '' : 'пуста'}</h1>
                <div style={{overflowY: 'scroll', height: '90vh'}}>
                    {basket.map((product, i) => {
                        return <StyledBasketItem dark={dark} key={product.id}>
                            <div style={{display: 'flex'}}>
                                <StyledBasketImg/>
                                <StyledBasketProps dark={dark}>
                                    <div>
                                        <h3 style={{marginTop: "10px"}}>{product.name}</h3>
                                        <h4>{product.counter}X * {product.price}</h4>
                                    </div>
                                    <h3 style={{marginBottom: "10px"}}>{+product.price * product.counter}₽</h3>
                                </StyledBasketProps>
                            </div>
                            <StyledDeleteButton dark={dark} onClick={() => {deleteBasketItem(`${product.name}${product.price}`)}}>-1</StyledDeleteButton>
                        </StyledBasketItem>
                    })}
                </div>
            </StyledBasketWrapper>
        </>
        :
        <></>}
        <div style={{cursor: 'pointer'}} onClick={switched}>
            <BasketIcon value={basket.reduce((acc, prod) => acc + prod.counter, 0)}></BasketIcon>
        </div>
    </>
}

export default Basket