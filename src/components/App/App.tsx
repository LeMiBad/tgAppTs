import { useStore } from 'effector-react'
import { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { $category } from '../../store/pickedCategory'
import { $tgInfo, darkThemeEnabler, desktopDisabler } from '../../store/tgData'
import Header from '../Header/Header'
import ProductList from '../ProductList/ProductList'
import './../../font/Roboto.css'

declare global {
    interface Window {
        Telegram: {
            WebApp: any
        };
    }
}

const GlobalStyle = createGlobalStyle<{dark: boolean}>`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        body {
            background-color: ${props => props.dark? 'black' : "white"};
        }
    }
`

const StyledCategoryName = styled.h1<{dark: boolean}>`
    color: ${props => props.dark? "white" : "black"};
    padding-left: 5%;
    font-size: 22px;
`

const App = () => {
    const currentCategory = useStore($category)

    const {dark} = useStore($tgInfo)

    useEffect(() => {
        if(window.Telegram.WebApp.colorScheme === 'dark') darkThemeEnabler()
    }, [])

    useEffect(() => {
        if(window.Telegram.WebApp.platform !== 'tdesktop') desktopDisabler()
    }, [])


    return (
        <>
            <GlobalStyle dark={dark}/>
            <Header/>
            <StyledCategoryName dark={dark}>{currentCategory}</StyledCategoryName>
            <ProductList/>
        </>
    )
}

export default App