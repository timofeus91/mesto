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
    setUserInfo() {
        const popupUser = document.querySelector('.popup_user');
        const userName = popupUser.querySelector('.popup__input_topform');
        const userAbout = popupUser.querySelector('.popup__input_bottomform');
        this._nameFromDoc = userName.value;
        this._aboutUserFromDoc - userAbout.value;
    }
}