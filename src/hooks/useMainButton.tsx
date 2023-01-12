import { useStore } from "effector-react"
import MainButton from "../components/MainButton/MainButton"
import { $basket, addBasketItem } from "../store/basket"
import { $pageId } from "../store/pages"
import { $ProductPage } from "../store/ProductPage"
import { IProduct } from "../types/ProductType"
import usePage from "./usePage"




const useMainButton = () => {
    const pageId = useStore($pageId)
    const basket = useStore($basket)
    const data: Array<IProduct> = useStore($ProductPage)
    const {toBasket, toProductList} = usePage()

    const basketSum = basket.reduce((acc, item) => {
        return acc + +item.data.salePrices[0].value * item.counter
    }, 0)

    const firstVar = data[0]

    if(pageId === 1) {
        if(basketSum) return <MainButton func={toBasket}>{`Оформить заказ на ${basketSum}`}</MainButton>
        else return null
    }
    else if(pageId === 2) {
        if(basketSum) return <MainButton func={toBasket}>{`Перйти к оформлению на ${basketSum}`}</MainButton>
        else return <MainButton func={toProductList}>Назад к товарам</MainButton>
    }
    else if(pageId === 3 && firstVar) {
        if(firstVar.salePrices[0].value) return <MainButton func={() => {
            addBasketItem({
                data: firstVar,
                counter: 1
            })
        }}>{`Добавить в корзину +${firstVar.salePrices[0].value}`}</MainButton>
        else return <MainButton func={toProductList}>Товара нет в наличии</MainButton>
    }
}

export default useMainButton