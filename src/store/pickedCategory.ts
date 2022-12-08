import { createEvent, createStore } from "effector";

export const setCategory = createEvent<string>()
export const $category = createStore('Шарфы')
    .on(setCategory, (_, category) => category)
