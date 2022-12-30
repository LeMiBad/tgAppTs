// import axios from "axios"
import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { $acces } from "../../store/skladData"
import { getImage } from "../../utils/getImage"
import {productUpdate} from './../../store/ProductPage'
import NotImage from "./NotImage"


interface ProductItemProps {
    data: any
    ProductPageSwitcher: () => void
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


const Product: React.FC<ProductItemProps> = ({data, ProductPageSwitcher, addBasketItemHandler}) => {
    const {access_token} = useStore($acces)
    const [{images, isLoading}, setImages] = useState<{images: string[], isLoading: boolean}>({images: [], isLoading: true})

    useEffect(() => {
        getImage(data.images.meta.href, access_token)
            .then(data => {
                data.forEach((imgFetch) => {
                    imgFetch.then(imgData => {
                        const img: string = imgData.data.img_url
                        setImages({images: [...images, img], isLoading: false})
                    })
                })
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access_token, data.images.meta.href])
    !isLoading? console.log(images) : console.log('Загрузка...')

    const productHandler = () => {
        productUpdate({...data, price: data.salePrices[0].value})
    }


    return (
        <StyledProductItem onClick={productHandler}>
            <StyledProductImg src={images[0]} onClick={ProductPageSwitcher}/>
            {/* <NotImage/> */}
            <StyledNameWrapper>
                <h3>{data.name}</h3>
                <h3 className="price">{data.salePrices[0].value}Р</h3>
                <button onClick={(e) => addBasketItemHandler(e, data)}>+</button>
            </StyledNameWrapper>
        </StyledProductItem>
    )
}

export default Product