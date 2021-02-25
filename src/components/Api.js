//класс для подключения api

class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getInitialCards() {
        fetch(`${this._url}cards`, {
             method: 'GEt',
             headers: this._headers, 
        })
    }
}