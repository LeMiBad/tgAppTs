import styled from "styled-components"
import { setCategory } from "../../store/pickedCategory"



const StyledCategoryList = styled.div`
    display: flex;
    gap: 10px;
    padding: 15px 0 15px 0;
    overflow-x: scroll;
    @media (max-width: 768px) {
        
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        width: 30px;
    }
`

const StyledCategoryListItem = styled.div`
    font-size: 20px;
    height: 100%;
    cursor: pointer;
`


const CategoryList = () => {

    const categoryList = ['Шарфы', 'Часы', 'Джинсы', 'Куртки', 'Обувь', 'Колготки', 'Кросовки', 'Шарфы', 'Часы', 'Джинсы', 'Куртки', 'Обувь', 'Колготки', 'Кросовки', 'Шарфы', 'Часы', 'Джинсы', 'Куртки', 'Обувь', 'Колготки', 'Кросовки']

    return (
        <StyledCategoryList>
            {categoryList.map((category, i) => <StyledCategoryListItem key={category + i} onClick={() => setCategory(category)}>{category}</StyledCategoryListItem>)}
        </StyledCategoryList>
    )
}

export default CategoryList