//класс , который управляет отображением имени- профессии пользователя. Необходим для изменения этих данных

export class UserInfo {
    constructor({ nameFromDoc, aboutUserFromDoc }) {
        this._nameFromDoc = document.querySelector(nameFromDoc);
        this._aboutUserFromDoc = document.querySelector(aboutUserFromDoc);
        this._userAvatar = document.querySelector('.profile__avatar');
    }

    //публичный метод getUserInfo, который возвращает объект с данными пользователя
    getUserInfo() {
        const userList = {}
        userList.name = this._nameFromDoc;
        userList.about = this._aboutUserFromDoc;

        return userList
    }

    //публичный метод setUserInfo, который принимает новые данные пользователя (имя, профессия) и добавляет их на страницу
    setUserInfo(data) {
        this._nameFromDoc.textContent = data.name;
        this._aboutUserFromDoc.textContent = data.about;
    }

    //публичный метод setUserAvatar, который используется для смены аватарки на странице
    setUserAvatar(avatar) {
        this._userAvatar.src = avatar;
    }
}