import axios from "axios"
import { createEffect, createStore } from "effector"




export const fetchUserReposFx = createEffect(async (name: string) => {
    const url = `https://api.github.com/users/${name}/repos`
    const req = await axios(url)
    return req.data
})


export const $repos = createStore<any>([])
    .on(fetchUserReposFx.doneData, (_: any, repos: any) => repos)

$repos.watch((repos: any) => {
    console.log(repos)
})