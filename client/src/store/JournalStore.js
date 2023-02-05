import {makeAutoObservable} from "mobx";

export default class JournalStore{
    constructor() {
        this._types = [
            {id: 1, name: 'SPE'},
            {id: 2, name: 'Без рубрики'},
            {id: 3, name: 'Капитальный ремонт скважин'},
            {id: 4, name: 'Механизированная добыча'},
            {id: 5, name: 'Наземная инфраструктура'},
            {id: 6, name: 'Нефтепереработка'},
        ]
        this._journals = [
            {id: 1, name: 'Выпуск 99', price: 1000, img: 'https://glavteh.ru/wp-content/uploads/2023/01/screenshot-at-jan-31-12-34-05-300x398.png', description: "Описание", numOfPages: 123, numOfJournal: 99, year: 2022},
            {id: 2, name: 'Выпуск 55', price: 600, img: 'https://glavteh.ru/wp-content/uploads/2022/12/screenshot-at-dec-14-09-42-06-300x398.png', description: "Опание", numOfPages: 13, numOfJournal: 9, year: 222},
            {id: 3, name: 'Выпуск 15', price: 600, img: 'https://glavteh.ru/wp-content/uploads/2022/09/screenshot-at-sep-14-10-29-01-300x396.png', description: "Опание", numOfPages: 13, numOfJournal: 9, year: 222},
            {id: 4, name: 'Выпуск 15', price: 600, img: 'https://glavteh.ru/wp-content/uploads/2022/08/screenshot-at-aug-08-10-39-19-296x398.png', description: "Опание", numOfPages: 13, numOfJournal: 9, year: 222},
            {id: 5, name: 'Выпуск 15', price: 600, img: 'https://glavteh.ru/wp-content/uploads/2022/05/screenshot-at-may-11-11-27-52-300x393.png', description: "Опание", numOfPages: 13, numOfJournal: 9, year: 222},
            {id: 6, name: 'Выпуск 15', price: 600, img: 'https://glavteh.ru/wp-content/uploads/2022/11/screenshot-at-nov-21-10-46-17-300x398.png', description: "Опание", numOfPages: 13, numOfJournal: 9, year: 222}
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._isAuth = types
    }
    setJournals(journals){
        this._user = journals
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
