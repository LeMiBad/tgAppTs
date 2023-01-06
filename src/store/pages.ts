import { createEvent, createStore } from "effector";





export const setCurrentPage = createEvent<number>()
export const $pageId = createStore(0)
    .on(setCurrentPage, (_, i) => i)