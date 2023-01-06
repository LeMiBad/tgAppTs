import { useStore } from "effector-react"
import styled, { createGlobalStyle } from "styled-components"

import { $tgInfo } from "../../store/tgData"
import BasketIconButton from "../BasketIcon/BasketIcon"
import CategoryList from "../CategoryList/CategoryList"


const StyledBody = createGlobalStyle<{dark: boolean}>`
    body {
        background-color: ${props => props.dark? 'black' : "white"};
    }
`

const StyledHeader = styled.div<{dark: boolean}>`
    width: 100%;
    margin: 0 auto;
    position: fixed;
    z-index: 10;
    top: 0;
    gap: 10px;
    padding: 0 5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    background-color: ${props => props.dark? 'black' : "white"};
`

const StyledHeaderSection = styled.div`
    display: flex;
    min-width: 30px;
`

const Header = () => {
    const {dark} = useStore($tgInfo)

    return <>
        <StyledBody dark={dark}></StyledBody>
        <StyledHeader dark={dark}>
            <CategoryList/>
            <StyledHeaderSection>
                <BasketIconButton/>
            </StyledHeaderSection>
        </StyledHeader>
    </>
}

export default Header