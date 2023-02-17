import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}



export const createJournal = async (journal) => {
    const {data} = await $authHost.post('api/journal', journal)
    return data
}

export const fetchJournals = async () => {
    const {data} = await $host.get('api/journal')
    return data
}

export const fetchOneJournal = async (id) => {
    const {data} = await $host.get('api/journal/' + id)
    return data
}