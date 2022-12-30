import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { getShopAcces } from '../../store/skladData'
import { $tgInfo, darkThemeEnabler, desktopEnabler } from '../../store/tgData'
import Header from '../Header/Header'
import ProductList from '../ProductList/ProductList'
import SalePointPicker from '../SalePointPicker/SalePointPicker'
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

const App = () => {
    const {dark} = useStore($tgInfo)
    
    const [params] = useSearchParams()

    const initId = params.get('id') || '8'

    useEffect(() => {
        if(window.Telegram.WebApp.colorScheme === 'dark') darkThemeEnabler()
    }, [])

    useEffect(() => {
        if(window.Telegram.WebApp.platform === 'tdesktop') desktopEnabler()
    }, [])
    
    
    useEffect(() => {
        getShopAcces(initId)
    }, [initId])
    

    return (
        <>
            <GlobalStyle dark={dark}/>
            <SalePointPicker/>
            <Header/>
            <ProductList/>
        </>
    )
}

export default App