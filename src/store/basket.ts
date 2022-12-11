import { createEvent, createStore } from "effector";

interface IBasketItem {
    id: number
    name: string
    desk: string
    price: string
}


const initialBasket: IBasketItem[] = []



export const addBasketItem = createEvent<IBasketItem>()
export const deleteBasketItem = createEvent<number>()
export const $basket = createStore(initialBasket)
    .on(addBasketItem, (state, newBasketItem) => [...state, {...newBasketItem, id: state.length}])
    .on(deleteBasketItem, (state, index) => {
        state.splice(index, 1)
        console.log(state)
        return [...state]
    })