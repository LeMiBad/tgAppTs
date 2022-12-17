import { useStore } from "effector-react"
import styled, { keyframes } from "styled-components"
import ArrowIcon from "../../icons/ArrowIcon"
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
    animation: ${props => props.anim} 0.2s forwards;
`


const ProductPage: React.FC<IProps>  = ({exit}) => {
    const {dark} = useStore($tgInfo)

    return  <>
        <Wrapper anim={enter} dark={dark}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <ArrowIcon func={exit}/>
                <Basket exitProductPage={exit}/>
            </div>
        </Wrapper>
    </>
}

export default ProductPage