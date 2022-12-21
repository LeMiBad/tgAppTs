import { createEvent, createStore } from "effector";

interface ICategory {
    folder_id: string, 
    folder_name: string, 
    user_folder_name: string
}

const initialICategory = {
    folder_id: '', 
    folder_name: '', 
    user_folder_name: ''
}

export const setCategory = createEvent<ICategory>()
export const $category = createStore<ICategory>(initialICategory)
    .on(setCategory, (_, category) => category)
