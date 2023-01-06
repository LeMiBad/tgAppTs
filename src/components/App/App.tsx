import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { $pageId, setCurrentPage } from '../../store/pages'
import { getShopAcces } from '../../store/skladData'
import { $tgInfo, darkThemeEnabler, desktopEnabler } from '../../store/tgData'
import Basket from '../Basket/Basket'
import ProductList from '../ProductList/ProductList'
import ProductPage from '../ProductPage/ProductPage'
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
    const pages = [<SalePointPicker/>, <ProductList/>, <Basket/>, <ProductPage exit={() => {setCurrentPage(1)}}/>]
    const {dark} = useStore($tgInfo)
    const [params] = useSearchParams()
    const pageId = useStore($pageId)
    const initId = params.get('id') || '3'

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
            {pages[pageId]}
        </>
    )
}

export default App