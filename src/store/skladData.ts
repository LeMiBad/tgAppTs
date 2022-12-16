import axios from "axios";
import { createStore } from "effector";
import { createEffect } from 'effector'

interface IAcces {
    access_token: string
    account_id: string
    org_name: string
}

const initialAcces = {access_token: '', account_id: '', org_name: ''}

export const getShopAcces = createEffect(async (id: string) => {
    const config = {
        headers: {
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Accept": "*/*",
            "Content-Type": "application/json",
            'Access-Control-Allow-Credentials': "true"
        },
    }

    const url = `https://www.mc.optimiser.website/api/optimiser/2.0/apps/shop_info/${id}`
    const data = await axios(url, config)
    return data.data
})

export const $acces = createStore<IAcces>(initialAcces)
    .on(getShopAcces.done, (state, {params, result}) => result) 











interface ISalePoint {
    sklad_id : string 
    sklad_name : string 
    user_sklad_name : string
}

export const getSalePoints = createEffect(async (clientId: string) => {
    const config = {
        headers: {
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Accept": "*/*",
            "Content-Type": "application/json",
            'Access-Control-Allow-Credentials': "true"
        },
    }

    const url = `https://www.mc.optimiser.website/api/optimiser/2.0/apps/configure/${clientId}`
    const data = await axios(url, config)
    return data.data.current_sklad_id
})

export const $salePoints = createStore<ISalePoint[]>([])
    .on(getSalePoints.done, (state, {params, result}) => result) 