//класс , который управляет отображением имени- профессии пользователя. Необходим для изменения этих данных

export class UserInfo {
    constructor({ nameFromDoc, aboutUserFromDoc }) {
        this._nameFromDoc = document.querySelector(nameFromDoc);
        this._aboutUserFromDoc = document.querySelector(aboutUserFromDoc);
    }

    //публичный метод getUserInfo, который возвращает объект с данными пользователя
    getUserInfo() {
        const userList = {}
        userList.name = this._nameFromDoc;
        userList.about = this._aboutUserFromDoc;

        return userList
    }

    //публичный метод setUserInfo, который принимает новые данные пользователя (имя, профессия) и добавляет их на страницу
    setUserInfo(name, about) {
        this._nameFromDoc = name;
        this._aboutUserFromDoc - about;
    }
}