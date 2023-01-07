import { useStore } from "effector-react"
import styled from "styled-components"
import { $tgInfo } from "../../store/tgData"

const StyledMainButton = styled.button<{dark: boolean}>`
    position: fixed;
    width: 100%;
    padding: 2.5vh 0;
    z-index: 300;
    bottom: -1px;
    font-size: 16px;
    border: 0;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.dark? 'white' : 'black'};
    color: ${props => props.dark? 'black' : 'white'};
`

const MainButton: React.FC<{children: string, func: () => void}> = ({children, func}) => {
    const {dark} = useStore($tgInfo)

    return (
        <StyledMainButton onClick={func} dark={dark}>{children}</StyledMainButton>
    )
}

export default MainButton