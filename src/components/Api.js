//класс для подключения api

export class Api {
    //конструктор принимает адрес куда обращаться за данными (или куда их отправлять) и настройки.
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    // метод по инициализации карточек с сервера

    getInitialCards() {
       return fetch(`${this._url}cards`, {
             method: 'GEt',
             headers: this._headers, 
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }

            return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
        });
    }

    //метод по добавлению новой карточки

    addNewCard(data) {
        return fetch(`${this._url}cards`, {
              method: 'POST',
              headers: this._headers,
              body: JSON.stringify({
                  name: data.name,
                  link: data.link,
              })
        }).then((res) => {
             if (res.ok) {
                 return res.json()
             }

             return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
         });
    }

    //метод по получению информации о пользователе

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
              method: 'GET',
              headers: this._headers,
        }).then((res) => {
             if (res.ok) {
                 return res.json()
             }

             return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
         });
    }

    //метод по изменению информации о пользователе

    editUserInfo(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
              })
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }

            return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
        });
    }

    //метод по смене аватарки

    editUserAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link
              })
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }

            return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
        });
    }


    //метод по установке лайка

    putLike(cardId) {
        return fetch(`${this._url}cards/likes/${cardId}/`, {
            method: 'PUT',
            headers: this._headers,
      }).then((res) => {
           if (res.ok) {
               return res.json()
           }

           return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
       });
    }

    //метод по снятию лайка

    removeLike(cardId) {
        return fetch(`${this._url}cards/likes/${cardId}/`, {
            method: 'DELETE',
            headers: this._headers,
      }).then((res) => {
           if (res.ok) {
               return res.json()
           }

           return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
       });
    }

    //метод по удалению карточки

    deleteCard(cardId) {
        return fetch(`${this._url}cards/${cardId}/`, {
            method: 'DELETE',
            headers: this._headers,
      }).then((res) => {
           if (res.ok) {
               return res.json()
           }

           return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
       });
    }





}

