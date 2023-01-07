import { useStore } from "effector-react"
import Basket from "../components/Basket/Basket"
import ProductList from "../components/ProductList/ProductList"
import ProductPage from "../components/ProductPage/ProductPage"
import SalePointPicker from "../components/SalePointPicker/SalePointPicker"
import { $pageId, setCurrentPage } from "../store/pages"




const usePage = () => {
    const pages = [<SalePointPicker/>, <ProductList/>, <Basket/>, <ProductPage exit={() => {setCurrentPage(1)}}/>]
    const pageId = useStore($pageId)




    return pages[pageId]
}

export default usePage