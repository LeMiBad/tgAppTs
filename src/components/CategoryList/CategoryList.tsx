import { useStore } from "effector-react"
import { useEffect } from "react"
import styled from "styled-components"
import { $category, setCategory } from "../../store/pickedCategory"
import { $acces, $categories, getCategories } from "../../store/skladData"
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

const StyledCategoryListItem = styled.div<{active?: boolean, dark: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.active? '16px' : '16px'};
    font-weight: ${props => props.active? '600' : '400'};
    color: ${props => props.active? props.dark? 'white' : 'black' : '#a09a9a'};
    height: 100%;
    white-space: nowrap;
    cursor: pointer;
`


const CategoryList = () => {
    const {dark, desktop} = useStore($tgInfo)
    const activeCategory  = useStore($category)

    const {account_id} = useStore($acces)
    const categories = useStore($categories)
    
    useEffect(() => {
        if(account_id.length) {
            getCategories(account_id)
        }
    }, [account_id])



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
                {categories.map(({user_folder_name}, i) => {
                    if(user_folder_name === activeCategory) return <StyledCategoryListItem dark={dark} active={true} key={user_folder_name + i} onClick={(e) => pickCategory(e, user_folder_name)}>{user_folder_name}</StyledCategoryListItem>
                    return <StyledCategoryListItem dark={dark} key={user_folder_name + i} onClick={(e) => pickCategory(e, user_folder_name)}>{user_folder_name}</StyledCategoryListItem>
                })}
            </StyledCategoryList>
        </>
    )
}

export default CategoryList