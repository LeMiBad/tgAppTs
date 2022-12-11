import { useStore } from "effector-react"
import styled from "styled-components"
import { $category, setCategory } from "../../store/pickedCategory"
import { $tgInfo } from "../../store/tgData"



const StyledCategoryList = styled.div<{desktop: boolean, dark: boolean, ref?: any}>`
    position: relative;
    display: flex;
    gap: 10px;
    padding: 15px 0 15px 0;
    user-select: none;
    overflow-x: ${props => props.desktop? 'hidden' : "scroll"};
    color: ${props => props.dark? 'white' : 'black'};
    @media (max-width: 768px) {
        
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        width: 30px;
    }
`

const StyledCategoryListItem = styled.div<{active?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.active? '16px' : '16px'};
    font-weight: ${props => props.active? '600' : '400'};
    color: ${props => props.active? 'black' : '#a09a9a'};
    height: 100%;
    cursor: pointer;
`


const CategoryList = () => {
    const {dark, desktop} = useStore($tgInfo)
    const activeCategory  = useStore($category)


    const categoryList = ['Шарфы', 'Часы', 'Джинсы', 'Куртки', 'Обувь', 'Колготки', 'Кросовки', 'Кофе', 'Пальто', 'Рюкзаки', 'Стеллажи', 'Скрипки', 'Гитары', 'Страны', 'Чашки', 'Тарелки',]




    const pickCategory = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, category: string) => {
        setCategory(category)
        if(e.currentTarget.parentElement) {
            e.currentTarget.parentElement.scrollLeft = 0
        }
        e.currentTarget?.parentElement?.scrollBy({
            left: e.currentTarget?.offsetLeft - 70,
        })
    }


    return (
        <>
            <StyledCategoryList dark={dark} desktop={desktop}>
                {categoryList.map((category, i) => {
                    if(category === activeCategory) return <StyledCategoryListItem active={true} key={category + i} onClick={(e) => pickCategory(e, category)}>{category}</StyledCategoryListItem>
                    return <StyledCategoryListItem key={category + i} onClick={(e) => pickCategory(e, category)}>{category}</StyledCategoryListItem>
                })}
            </StyledCategoryList>
        </>
    )
}

export default CategoryList