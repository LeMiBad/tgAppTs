import { useStore } from "effector-react"
import MainButton from "../components/MainButton/MainButton"
import { $basket, addBasketItem } from "../store/basket"
import { $pageId, setCurrentPage } from "../store/pages"
import { $ProductPage } from "../store/ProductPage"
import { IProduct } from "../types/ProductType"




const useMainButton = () => {
    const pageId = useStore($pageId)
    const basket = useStore($basket)
    const data: IProduct = useStore($ProductPage)

    const basketSum = basket.reduce((acc, item) => {
        return acc + +item.data.salePrices[0].value * item.counter
    }, 0)


    if(pageId === 1) {
        if(basketSum) return <MainButton func={() => {setCurrentPage(2)}}>{`Оформить заказ на ${basketSum}`}</MainButton>
        else return null
    }
    else if(pageId === 2) {
        if(basketSum) return <MainButton func={() => {setCurrentPage(2)}}>{`Перйти к оформлению на ${basketSum}`}</MainButton>
        else return <MainButton func={() => {setCurrentPage(1)}}>Назад к товарам</MainButton>
    }
    else if(pageId === 3) {
        if(data.salePrices[0].value) return <MainButton func={() => {
            addBasketItem({
                data,
                counter: 1
            })
        }}>{`Добавить в корзину +${data.salePrices[0].value}`}</MainButton>
        else return <MainButton func={() => {setCurrentPage(1)}}>Товара нет в наличии</MainButton>
    }
}

export default useMainButton