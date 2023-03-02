import {makeAutoObservable} from "mobx";

export default class JournalStore {
    constructor() {
        this._types = []
        this._journals = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 1
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setJournals(journals){
        this._journals = journals
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setPage(page){
        this._page = page
    }

    setTotalCount(count){
        this._totalCount = count
    }

    get types(){
        return this._types
    }

    get journals(){
        return this._journals
    }

    get selectedType(){
        return this._selectedType
    }

    get totalCount(){
        return this._totalCount
    }

    get page(){
        return this._page
    }

    get limit(){
        return this._limit
    }


}
