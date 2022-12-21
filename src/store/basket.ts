import { createEvent, createStore } from "effector";

interface IBasketItem {
    id: string
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
        // Чтобы удалять по одному
        // let fullDeleted = ''
        // const newState = state.map(prod => {
        //     if(`${prod.name}${prod.price}` === prodData) {
        //         prod.counter -= 1
        //         if(prod.counter <= 0) {
        //             fullDeleted = prodData
        //         }
        //         return prod
        //     }
        //     else {
        //         return prod
        //     }
        // })
        // for(let i = 0; i < newState.length; i++) {
        //     if(`${newState[i].name}${newState[i].price}` === fullDeleted) {
        //         newState.splice(i, 1)
        //         break
        //     }
        // }
        // return newState


        state.splice(index, 1)
        return [...state]
    })