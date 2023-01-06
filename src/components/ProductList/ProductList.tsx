import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import useOpen from "../../hooks/useOpeningSwitcher"
import { addBasketItem } from "../../store/basket"
import { $category } from "../../store/pickedCategory"
import { $acces, $products, getProducts } from "../../store/skladData"
import { IProduct } from "../../types/ProductType"
import Header from "../Header/Header"
import Loader from "../Loader/Loader"
import Product from "../Product/Product"
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
        addBasketItem(
            {
                data: product,
                counter: 0
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
            <Header/>
            {openState? <ProductPage exit={switchHandler}></ProductPage> : <></>}
            <StyledProductList>
                {!isLoading? <>
                    {products.map((row, ind: number) => {
                        return <StyledProductRow key={ind}>
                            {row.map((data: IProduct | null, i: number) => {
                                return data? <Product
                                key={data.code}
                                data={data}
                                addBasketItemHandler={addBasketItemHandler}
                            /> : null
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