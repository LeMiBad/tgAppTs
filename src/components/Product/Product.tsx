// import axios from "axios"
import styled from "styled-components"
import useProductImages from "../../hooks/useProductImages"
import { setCurrentPage } from "../../store/pages"
import { IProduct } from "../../types/ProductType"
import {productUpdate} from './../../store/ProductPage'
import NotImage from "./NotImage"




interface ProductItemProps {
    data: IProduct
    addBasketItemHandler: (e: any, data: any) => void
}


const StyledProductItem = styled.div`
    display: flex;
    width: 43vw;
    flex-direction: column;
    height: 100%;
    box-shadow: 8px 8px 11px #00000040;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const StyledProductImg = styled.img`
    height: 43vw;
    cursor: pointer;
    background-size: contain !important;
    /* background: url('https://papik.pro/uploads/posts/2021-09/1631839563_11-papik-pro-p-krasivie-kvadratnie-risunki-12.jpg'); */
`

const StyledNameWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #e19946;
    padding: 30px 10px 15px 10px;
    color: white;
    .price {
        position: absolute;
        left: 10px;
        top: 10px;
    }
    h3 {
        font-size: 16px;
        font-weight: 500;
        max-width: 100%;
    }
    button {
        position: absolute;
        cursor: pointer;
        z-index: 1;
        right: 5%;
        top: -15px;
        font-size: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        padding: 4px 6px;
        background-color: rgb(242,18,71);
        color: white;
        border: 0;
        transition: 0.2s;
    }
    button:hover {
        background-color: #f87493;
    }
`


const Product: React.FC<ProductItemProps> = ({data, addBasketItemHandler}) => {
    const {images} = useProductImages(data)    

    // !isLoading? console.log(images) : console.log('Загрузка...')


    return (
        <StyledProductItem onClick={() => productUpdate(data)}>
            { images.length? 
                <StyledProductImg src={images[0]} onClick={() => setCurrentPage(3)}/>
                : 
                <NotImage onClick={() => setCurrentPage(3)}/>
            }            
            <StyledNameWrapper>
                <h3>{data.name}</h3>
                <h3 className="price">{data.salePrices[0].value}Р</h3>
                <button onClick={(e) => addBasketItemHandler(e, data)}>+</button>
            </StyledNameWrapper>
        </StyledProductItem>
    )
}

export default Product