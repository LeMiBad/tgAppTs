import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import useOpen from "../../hooks/useOpeningSwitcher"
import { addBasketItem } from "../../store/basket"
import { $category } from "../../store/pickedCategory"
import { $acces, $products, getProducts } from "../../store/skladData"
import Loader from "../Loader/Loader"
import ProductPage from "../ProductPage/ProductPage"
import './anim.css'


const StyledProductList = styled.div`
    display: flex;
    width: 90%;
    margin: 55px auto 0 auto;
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


const ProductList = () => {
    const {access_token} = useStore($acces)
    const {openState, switchHandler} = useOpen()
    const {folder_name} = useStore($category)
    const [isLoading, setIsLoaing] = useState(true)
    let products = useStore($products)
    
    const ProductPageSwitcher = () => {
        switchHandler()
    }

    useEffect(() => {
        getProducts.pending.watch(pending => {
            setIsLoaing(pending)
        })
    }, [])

    useEffect(() => {
        getProducts({acces: access_token, category: folder_name})
    }, [access_token, folder_name])


    const addBasketItemHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: any) => {
        console.log(product)
        addBasketItem(
            {
                id: product.externalCode,
                counter: 1,
                name: product.name,
                desk: product.description,
                price: product.salePrices[0].value,
            }
        )
        
        const el = e.currentTarget
        setTimeout(() => {
            el.classList.add('buttonClick')
        }, 0)
        setTimeout(() => {
            el.classList.remove('buttonClick')
        }, 300)
    }


    return (
        <>
            {openState? <ProductPage exit={switchHandler}></ProductPage> : <></>}
            <StyledProductList>
                {!isLoading? <>
                    {products.map((row, ind: number) => {
                        return <StyledProductRow key={ind}>
                            {row.map(({data, img}: any, i: number) => {
                                return <StyledProductItem key={ind+1 + i+1}>
                                    <StyledProductImg src={img} onClick={ProductPageSwitcher}/>
                                    <StyledNameWrapper>
                                        <h3>{data.name}</h3>
                                        <h3 className="price">{data.salePrices[0].value}Р</h3>
                                        <button onClick={(e) => addBasketItemHandler(e, data)}>+</button>
                                    </StyledNameWrapper>
                                </StyledProductItem>
                            })}
                        </StyledProductRow>
                    })}
                </> 
                : 
                <Loader/>}
            </StyledProductList>
        </>
    )
}

export default ProductList