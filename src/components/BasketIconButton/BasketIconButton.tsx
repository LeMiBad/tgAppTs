import { useStore } from "effector-react"
import usePage from "../../hooks/usePage"
import BasketIcon from "../../icons/BasketIcon"
import { $basket } from "../../store/basket"
import { $pageId } from "../../store/pages"




const BasketIconButton = () => {
    const basket = useStore($basket)
    const pageId = useStore($pageId)
    const {toProductList, toBasket} = usePage()

    const handler = () => {
        if(pageId === 2) toProductList()
        else toBasket()
    }

    return (
        <div style={{cursor: 'pointer', position: 'relative'}} onClick={handler}>
            <BasketIcon value={basket.reduce((acc, prod) => acc + prod.counter, 0)}></BasketIcon>
        </div>
    )
}

export default BasketIconButton