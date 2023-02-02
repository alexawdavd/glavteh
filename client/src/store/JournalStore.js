import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._types = [
            {id: 1, name: ''},
            {id: 1, name: ''}
        ]
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }


}
