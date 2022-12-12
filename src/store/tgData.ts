import { createEvent, createStore } from "effector";




const initialTgInfo = {
    dark: true,
    desktop: false
}



export const darkThemeEnabler = createEvent()
export const desktopEnabler = createEvent()
export const $tgInfo = createStore(initialTgInfo)
    .on(darkThemeEnabler, state => {
        return {...state, dark: true}
    })
    .on(desktopEnabler, state => {
        return {...state, desktop: true}
    })