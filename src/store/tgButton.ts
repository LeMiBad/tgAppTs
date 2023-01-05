import { createEvent, createStore } from "effector";


interface ITgButton {
    text: string
    color: string
    textColor: string
    func: () => void
}

const initialTgButton = {
    text: '',
    color: '',
    textColor: '',
    func: () => {}
}

export const showTgButton = createEvent<ITgButton>()
export const disableTgButton = createEvent()
export const $tgButton = createStore<ITgButton>(initialTgButton)
    .on(showTgButton, (_, data) => {
        window.Telegram.WebApp.MainButton.show()
        window.Telegram.WebApp.MainButton.setParams({
            text: data.text,
            color: data.color,
            text_color: data.textColor
        })
        window.Telegram.WebApp.onEvent('mainButtonClicked', data.func)
    })
    .on(disableTgButton, (_, func) => {
        // window.Telegram.WebApp.offEvent('mainButtonClicked', func)
        window.Telegram.WebApp.MainButton.disable()
    })