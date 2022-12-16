import { useStore } from "effector-react"
import { ThreeCircles } from "react-loader-spinner"
import styled from "styled-components"
import { $tgInfo } from "../../store/tgData"


const Wrapper = styled.div<{dark: boolean}>`
    position: fixed;
    z-index: 33;
    width: 100%;
    height: 100vh;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.dark? 'black' : 'white'};
`


const Loader = () => {
    const {dark} = useStore($tgInfo)

    return (
        <Wrapper dark={dark}>
            <ThreeCircles
                height="250"
                width="250"
                color="#EE6738"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
            />
        </Wrapper>
    )
}

export default Loader