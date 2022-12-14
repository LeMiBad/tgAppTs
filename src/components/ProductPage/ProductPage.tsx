import { useStore } from "effector-react"
import styled, { keyframes } from "styled-components"
import ArrowIcon from "../../icons/ArrowIcon"
import useProductImages from "../../hooks/useImages"
import { $ProductPage } from "../../store/ProductPage"
import { $tgInfo } from "../../store/tgData"
import BigArrow from "../../icons/BigArrow"
import { useState } from "react"
import { IProduct } from "../../types/ProductType"
import BasketIconButton from "../BasketIconButton/BasketIconButton"
import LoadImage from "../LoadImage/LoadImage"
import NotAImage from "../Product/NotImage"


interface IProps {
    exit: () => void
}

const enter = keyframes`
    0% {
        left: -100%;
    }

    100% {
        left: 0;
    }
`


const Wrapper = styled.div<{dark: boolean, anim: any}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    background-color: ${props => props.dark? 'black' : 'white'};
    padding: 5%;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: ${props => props.anim} 0.2s forwards;
`

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    box-sizing: border-box;
`

const ImgWrapper = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    img {
        width: 50vw;
        height: 50vw;
        border-radius: 30px;
    }
`

const InfoWrapper = styled.div`
    margin-top: 4px;
    margin-left: -6%;
    padding: 0 5%;
    width: 112%;
    box-sizing: border-box;
    p {
        max-height: 200px;
        overflow: scroll;
    }
`

const NameWrapper = styled.div<{dark: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        color: ${props => props.dark? 'white' : 'black'};
        font-size: 24px;
    }
    h2 {
        font-size: 20px;
        color: ${props => props.dark? 'white' : 'black'};
    }
`

const KindsWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow-x: scroll;
    margin: 30px 0;
`

const ArrowWrapper = styled.div<{dark: boolean}>`
    min-width: 50px;
    min-height: 50px;
    border-radius: 50px;
    background-color: ${props => props.dark? 'white' : 'black'};
    display: flex;
    justify-content: center;
    align-items: center;
`

const ProductPage: React.FC<IProps>  = ({exit}) => {
    const {dark} = useStore($tgInfo)
    const data: IProduct[] = useStore($ProductPage)
    const {images, isLoading} = useProductImages(data[0])
    const [{imgIndex}, setCurImg] = useState<{imgIndex: number, slideState: string}>({imgIndex: 0, slideState: 'left'})




    const rightSlide = () => {
        if(imgIndex+1 === images.length) {
            setCurImg({imgIndex: imgIndex+1, slideState: 'right'})
        }
        else setCurImg({imgIndex: imgIndex+1, slideState: ''})
    }

    const leftSlide = () => {
        if(imgIndex === 1 || imgIndex === 0) {
            setCurImg({imgIndex: 0, slideState: 'left'})
        }
        else {
            setCurImg({imgIndex: imgIndex-1, slideState: ''})
        }
    }

    return  <>
        <Wrapper anim={enter} dark={dark}>
            <Navbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <ArrowIcon func={exit}/>
                <BasketIconButton/>
            </Navbar>
            <ImgWrapper>
                {imgIndex? <ArrowWrapper onClick={leftSlide} dark={dark}>
                    <BigArrow left/>
                </ArrowWrapper> : <div style={{width: 50, height: 50}}></div>}
                { isLoading? 
                    <LoadImage/>
                : 
                    images[imgIndex]? <img src={images[imgIndex]} alt="" /> : <NotAImage></NotAImage>
                }
                {imgIndex < images.length-1? <ArrowWrapper onClick={rightSlide} dark={dark}>
                        <BigArrow/>
                    </ArrowWrapper> : <div style={{width: 50, height: 50}}></div>
                }
            </ImgWrapper>
            <InfoWrapper>
                <NameWrapper dark={dark}>
                    <h1>{data[0].name}</h1>
                    <h2>{data[0].salePrices[0].value}??</h2>
                </NameWrapper>
                <h1 style={{fontSize: '24px', color: dark? 'white' : 'black'}}>????????????????</h1>
                <p style={{color: dark? 'white' : 'black'}}>{data[0].description}</p>
                <KindsWrapper>
                    {/* kinds.length? {kinds.map(kind => <KindItem dark={dark} key={kind}>{kind}</KindItem>)} */}
                </KindsWrapper>
            </InfoWrapper>
        </Wrapper>
    </>
}

export default ProductPage