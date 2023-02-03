import {makeAutoObservable} from "mobx";

export default class JournalStore{
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 1, name: 'Смартфоны'}
        ]
        this._journals = [
            {id: 1, name: 'Выпуск 99', price: 1000, img: "img/file/img.png", description: "Описание", numOfPages: 123, numOfJournal: 99, year: 2022},
            {id: 1, name: 'Выпуск 55', price: 600, img: "img/file/ig.png", description: "Опание", numOfPages: 13, numOfJournal: 9, year: 222}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._isAuth = types
    }
    setJournals(journals){
        this._user = journals
    }

    get types(){
        return this._types
    }

    get journals(){
        return this._journals
    }


}
