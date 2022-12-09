import styled from "styled-components"
import { addBasketItem } from "../../store/basket"


const StyledProductList = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    gap: 10px;
`

const StyledProductRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

const StyledProductItem = styled.div`
    display: flex;
    width: 43vw;
    flex-direction: column;
    box-shadow: 8px 8px 11px #00000040;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    `
const StyledProductImg = styled.div`
    height: 43vw;
    background-size: contain !important;
    background: url('https://papik.pro/uploads/posts/2021-09/1631839563_11-papik-pro-p-krasivie-kvadratnie-risunki-12.jpg');
`

const StyledNameWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-right: 1px solid #67cbf3;
    border-left: 1px solid #67cbf3;
    background-color: #67cbf3;
    color: white;
    h3 {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        max-width: 100%;
    }
    button {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 4px 6px;
        background-color: #67cbf3;
        color: white;
        border: 0;
        max-width: 100%;
        width: 100%;
    }
`

const testProducts = [
    [{
        id: 0,
        name: 'Обувь',
        desk: 'Предназначена для ношения',
        price: '2500'
    },
    {
        id: 1,
        name: 'Скрепка',
        desk: 'Для крепежей',
        price: '15'
    },],
    [{
        id: 2,
        name: 'Кастрюля',
        desk: 'С антипригарочным покрытием',
        price: '1200'
    },
    {
        id: 3,
        name: 'Кольцо',
        desk: 'Для предстоящего бракосочетания',
        price: '12500'
    },],
    [{
        id: 4,
        name: 'Кастрюля',
        desk: 'С антипригарочным покрытием',
        price: '1200'
    },
    {
        id: 5,
        name: 'Кольцо',
        desk: 'Для предстоящего бракосочетания',
        price: '12500'
    },],
    [{
        id: 6,
        name: 'Кастрюля',
        desk: 'С антипригарочным покрытием',
        price: '1200'
    },
    {
        id: 7,
        name: 'Кольцо',
        desk: 'Для предстоящего бракосочетания',
        price: '12500'
    },],
]

const ProductList = () => {
    return (
        <StyledProductList>
            {testProducts.map(row => {
                    return <StyledProductRow key={row[0].id}>
                        {row.map(product => {
                            return <StyledProductItem key={product.id}>
                                <StyledProductImg/>
                                <StyledNameWrapper>
                                    <h3>{product.name}</h3>
                                    <button onClick={() => addBasketItem(product)}>В корзину</button>
                                </StyledNameWrapper>
                            </StyledProductItem>
                        })}
                    </StyledProductRow>
                })}
        </StyledProductList>
    )
}

export default ProductList