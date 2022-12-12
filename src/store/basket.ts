import { createEvent, createStore } from "effector";

interface IBasketItem {
    id: number
    counter: number
    name: string
    desk: string
    price: string
}


const initialBasket: IBasketItem[] = []



export const addBasketItem = createEvent<IBasketItem>()
export const deleteBasketItem = createEvent<number>()
export const $basket = createStore(initialBasket)
    .on(addBasketItem, (state, newBasketItem) => {
        let isHave = false
        for(let i = 0; i < state.length; i++) {
            if(`${state[i].name}${state[i].price}` === `${newBasketItem.name}${newBasketItem.price}`) {
                isHave = true
            }
        }

        let newState = []

        if(isHave) {
            newState = state.map(prod => {
                if(`${prod.name}${prod.price}` === `${newBasketItem.name}${newBasketItem.price}`) {
                    prod.counter += 1
                    return prod
                }
                else {
                    return prod
                }
            })
        }
        else {
            newState = [...state, {...newBasketItem, counter: 1}]
        }

        return newState
    })
    .on(deleteBasketItem, (state, index) => {
        state.splice(index, 1)
        console.log(state)
        return [...state]
    })