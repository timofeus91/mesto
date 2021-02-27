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






}

