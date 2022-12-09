import { createEvent, createStore } from "effector";




const initialTgInfo = {
    dark: false,
    desktop: true
}



export const darkThemeEnabler = createEvent()
export const desktopDisabler = createEvent()
export const $tgInfo = createStore(initialTgInfo)
    .on(darkThemeEnabler, state => {
        return {...state, dark: true}
    })
    .on(desktopDisabler, state => {
        return {...state, desktop: false}
    })


