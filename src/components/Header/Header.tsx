import { useStore } from "effector-react"
import styled, { createGlobalStyle } from "styled-components"
import BasketIcon from "../../icons/BasketIcon"
import { $tgInfo } from "../../store/tgData"
import CategoryList from "../CategoryList/CategoryList"


const StyledBody = createGlobalStyle<{dark: boolean}>`
    body {
        background-color: ${props => props.dark? 'black' : "white"};
    }
`

const StyledHeader = styled.div`
    width: 90%;
    margin: 0 auto;
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`

const StyledHeaderSection = styled.div`
    display: flex;
    min-width: 30px;
`

const Header = () => {
    const {dark} = useStore($tgInfo)

    return <>
        <StyledBody dark={dark}></StyledBody>
        <StyledHeader>
            <CategoryList/>
            <StyledHeaderSection>
                <BasketIcon value={3}/>
            </StyledHeaderSection>
        </StyledHeader>
    </>
}

export default Header