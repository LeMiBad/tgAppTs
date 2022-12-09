import { useStore } from "effector-react"
import { useState } from "react"
import styled, { keyframes } from "styled-components"
import useOpen from "../../hooks/useOpeningSwitcher"
import BasketIcon from "../../icons/BasketIcon"
import { $basket } from "../../store/basket"
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
    /* min-height: 100%; */
    width: 100%;
    left: 0;
    top: 0%;
    padding: 15px 10px 10px 10px;
    animation: ${props => props.anim} 0.2s linear forwards;
    background-color: ${props => props.dark? 'black' : 'white'};
`


const StyledBasketItem = styled.div`
    display: flex;
    gap: 10px;
    width: 93%;
    max-height: 100%;
    box-shadow: 8px 8px 11px #00000040;
    border-radius: 10px;
    margin-bottom: 20px;
`

const StyledBasketImg = styled.div`
    min-width: 43vw;
    height: 43vw;
    border-radius: 10px;
    background-size: contain !important;
    background: url('https://papik.pro/uploads/posts/2021-09/1631839563_11-papik-pro-p-krasivie-kvadratnie-risunki-12.jpg');
`

const StyledBasketProps = styled.div<{dark: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${props => props.dark? 'white' : 'black'};
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

    console.log(basket)

    return <>
        {(openState)? <>
            <StyledBasketWrapper dark={dark} anim={curAnim}>
                <h1 style={{color: dark? 'white' : 'black', margin: '0px 10px 20px 0px'}}>Ваша корзина</h1>
                <div style={{overflowY: 'scroll', height: '100vh'}}>
                    {basket.map(product => {
                        return <StyledBasketItem key={product.id}>
                            <StyledBasketImg/>
                            <StyledBasketProps dark={dark}>
                                <div>
                                    <h3 style={{marginTop: "10px"}}>{product.name}</h3>
                                    <h4>{product.desk}</h4>
                                </div>
                                <h3 style={{marginBottom: "10px"}}>{product.price}₽</h3>
                            </StyledBasketProps>
                        </StyledBasketItem>
                    })}
                </div>
            </StyledBasketWrapper>
        </>
        :
        <></>}
        <div onClick={switched}>
            <BasketIcon value={basket.length}></BasketIcon>
        </div>
    </>
}

export default Basket