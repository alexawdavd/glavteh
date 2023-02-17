import {makeAutoObservable} from "mobx";

export default class JournalStore {
    constructor() {
        this._types = []
        this._journals = []
        this._selectedType = {}
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


    get types(){
        return this._types
    }

    get journals(){
        return this._journals
    }

    get selectedType(){
        return this._selectedType
    }



}
