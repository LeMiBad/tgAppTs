import axios from "axios";
import { createStore } from "effector";
import { createEffect } from 'effector'


interface IAcces {
    access_token: string
    account_id: string
    org_name: string
}

const initialAcces = { access_token: '', account_id: '', org_name: '' }

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
    .on(getShopAcces.done, (state, { params, result }) => result)



interface ISalePoint {
    sklad_id: string
    sklad_name: string
    user_sklad_name: string
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
    .on(getSalePoints.done, (_, { params, result }) => result)



interface ICategories {
    folder_id: string,
    folder_name: string,
    user_folder_name: string
}

export const getCategories = createEffect(async (clientId: string) => {
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
    return data.data.current_folder_id
})

export const $categories = createStore<ICategories[]>([])
    .on(getCategories.done, (_, { params, result }) => result)






export const getProducts = createEffect(async ({acces, category}: {acces: string, category: string}) => {
    const config = {
        headers: {
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Accept": "*/*",
            "Content-Type": "application/json",
            'Access-Control-Allow-Credentials': "true",
            "Authorization": `Bearer ${acces}`
        },
    }
    
    const url = `https://www.mc.optimiser.website/api/remap/1.2/entity/product?filter=pathName=${category}`
    const data = await axios(url, config)


    let newArr = []
    let beetweenArr = []
    for(let i = 0; i < data.data.rows.length; i++) {
        if(beetweenArr.length === 2) {
            newArr.push(beetweenArr)
            beetweenArr =[]
        }
        beetweenArr.push(data.data.rows[i])
    }

    // const images = await axios(newArr[0][0].images.meta.href, config)

    return newArr
})

export const $products = createStore<any[]>([])
    .on(getProducts.done, (_, { params, result }) => result)