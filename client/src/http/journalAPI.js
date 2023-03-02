import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async (typeId, page, limit) => {
    const {data} = await $host.get('api/type', {params: {
        typeId, page, limit
        }})
    return data
}



export const createJournal = async (journal) => {
    const {data} = await $authHost.post('api/journal', journal)
    console.log(data)
    return data
}

export const fetchJournals = async () => {
    const {data} = await $host.get('api/journal', )
    return data
}

export const fetchOneJournal = async (id) => {
    const {data} = await $host.get('api/journal/' + id)
    return data
}