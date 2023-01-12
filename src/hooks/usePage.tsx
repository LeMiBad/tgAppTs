import { useStore } from "effector-react"
import Basket from "../components/Basket/Basket"
import ProductList from "../components/ProductList/ProductList"
import ProductPage from "../components/ProductPage/ProductPage"
import SalePointPicker from "../components/SalePointPicker/SalePointPicker"
import { $pageId, setCurrentPage } from "../store/pages"




const usePage = () => {
    const pages = [<SalePointPicker/>, <ProductList/>, <Basket/>, <ProductPage exit={() => {setCurrentPage(1)}}/>]
    const pageId = useStore($pageId)


    const navigator = {
        toSalesPoiints: () => setCurrentPage(0),
        toProductList: () => setCurrentPage(1),
        toBasket: () => setCurrentPage(2),
        toProductPage: () => setCurrentPage(3),
    }

    return {currentPage: pages[pageId], ...navigator}
}

export default usePage