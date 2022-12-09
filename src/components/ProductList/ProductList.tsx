import { useStore } from "effector-react"
import styled from "styled-components"
import { $category } from "../../store/pickedCategory"
import { $tgInfo } from "../../store/tgData"


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

const ProductList = () => {
    const curItem = useStore($category)
    const {dark} = useStore($tgInfo)

    return (
        <StyledProductList>
            <StyledProductRow>
                <StyledProductItem>
                    <StyledProductImg/>
                    <StyledNameWrapper>
                        <h3>{curItem}</h3>
                        <button>В корзину</button>
                    </StyledNameWrapper>
                </StyledProductItem>
                <StyledProductItem>
                    <StyledProductImg/>
                    <StyledNameWrapper>
                        <h3>{curItem}</h3>
                        <button>В корзину</button>
                    </StyledNameWrapper>
                </StyledProductItem>
            </StyledProductRow>
            <StyledProductRow>
                <StyledProductItem>
                    <StyledProductImg/>
                    <StyledNameWrapper>
                        <h3>{curItem}</h3>
                        <button>В корзину</button>
                    </StyledNameWrapper>
                </StyledProductItem>
                <StyledProductItem>
                    <StyledProductImg/>
                    <StyledNameWrapper>
                        <h3>{curItem}</h3>
                        <button>В корзину</button>
                    </StyledNameWrapper>
                </StyledProductItem>
            </StyledProductRow>
            <StyledProductRow>
                <StyledProductItem>
                    <StyledProductImg/>
                    <StyledNameWrapper>
                        <h3>{curItem}</h3>
                        <button>В корзину</button>
                    </StyledNameWrapper>
                </StyledProductItem>
                <StyledProductItem>
                    <StyledProductImg/>
                    <StyledNameWrapper>
                        <h3>{curItem}</h3>
                        <button>В корзину</button>
                    </StyledNameWrapper>
                </StyledProductItem>
            </StyledProductRow>
            <StyledProductRow>
                <StyledProductItem>
                    <StyledProductImg/>
                    <StyledNameWrapper>
                        <h3>{curItem}</h3>
                        <button>В корзину</button>
                    </StyledNameWrapper>
                </StyledProductItem>
                <StyledProductItem>
                    <StyledProductImg/>
                    <StyledNameWrapper>
                        <h3>{curItem}</h3>
                        <button>В корзину</button>
                    </StyledNameWrapper>
                </StyledProductItem>
            </StyledProductRow>
        </StyledProductList>
    )
}

export default ProductList