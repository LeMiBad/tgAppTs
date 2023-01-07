import styled, { keyframes } from "styled-components"


const spinner = keyframes`
to {
    transform: rotate(1turn);
}
`

const StyledLoadImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6.4px solid;
    border-color: #ebebf2;
    border-right-color: #ee6738;
    animation: ${spinner} 1s infinite linear;
`




const LoadImage = () => <StyledLoadImage/>

export default LoadImage