import { useStore } from "effector-react"
import styled from "styled-components"
import { $tgInfo } from "../store/tgData"


const ArrowWrapper = styled.div<{dark: boolean}>`
    min-width: 30px;
    min-height: 30px;
    border-radius: 50px;
    transform: rotate(90deg);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.15s;
    :hover {
        background-color: ${props => props.dark? 'white' : 'black'};
        svg {
            fill: ${props => props.dark? 'black' : 'white'};
        }
    }
    svg {
        fill: ${props => props.dark? 'white' : 'black'};
    }
`

const ArrowIcon: React.FC<{func: () => void}> = ({func}) => {
    const {dark} = useStore($tgInfo)

    return <ArrowWrapper dark={dark} onClick={func}>
        <svg width="24" focusable="false" viewBox="0 0 24 24"  aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="m12.0003 15.5996-5.7857-5.785 1.414-1.4143 4.3717 4.3711 4.3717-4.3711 1.4141 1.4143-5.7858 5.785z"></path></svg>
    </ArrowWrapper>
}

export default ArrowIcon