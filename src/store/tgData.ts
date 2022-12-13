import axios from "axios";
import { createEvent, createStore } from "effector";




const initialTgInfo = {
    dark: false,
    desktop: false
}

const config = {
    headers: {
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

axios.get('https://www.mc.optimiser.website/api/optimiser/2.0/apps/shop_info/3', config)
    .then(console.log)


export const darkThemeEnabler = createEvent()
export const desktopEnabler = createEvent()
export const $tgInfo = createStore(initialTgInfo)
    .on(darkThemeEnabler, state => {
        return { ...state, dark: true }
    })
    .on(desktopEnabler, state => {
        return { ...state, desktop: true }
    })