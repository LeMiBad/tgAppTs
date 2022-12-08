import { useStore } from 'effector-react'
import { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { $repos, fetchUserReposFx } from '../../store'
import { $category } from '../../store/pickedCategory'
import Header from '../Header/Header'
import ProductList from '../ProductList/ProductList'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
}
`

const StyledCategoryName = styled.h1`
    padding-left: 5%;
    font-size: 22px;
`

const App = () => {

    const store = useStore($repos)

    const currentCategory = useStore($category)

    useEffect(() => {
        fetchUserReposFx('LeMiBad')
    }, [])

    return (
        <>
            <GlobalStyle />
            <Header/>
            <StyledCategoryName>{currentCategory}</StyledCategoryName>
            <ProductList/>
        </>
    )
}

export default App