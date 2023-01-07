import { useStore } from "effector-react"
import BasketIcon from "../../icons/BasketIcon"
import { $basket } from "../../store/basket"
import { $pageId, setCurrentPage } from "../../store/pages"




const BasketIconButton = () => {
    const basket = useStore($basket)
    const pageId = useStore($pageId)

    const handler = () => {
        if(pageId === 2) setCurrentPage(1)
        else setCurrentPage(2)
    }

    return (
        <div style={{cursor: 'pointer', position: 'relative'}} onClick={handler}>
            <BasketIcon value={basket.reduce((acc, prod) => acc + prod.counter, 0)}></BasketIcon>
        </div>
    )
}

export default BasketIconButton