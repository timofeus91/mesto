//класс Popup, который отвечает за открытие и закрытие попапов

export class Popup {

    //конструктор с параметром - селектор попапа

    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    //публичный метод open отвечающий за открытие попапа

    open() {}

    //публичный метод close отвечающий за закрытие попапа

    close() {}

    //приватный метод _handleEscClose содержащий логику закрытия попапа через esc

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    //приватный метод _handleMouseClose содержащий логику закрытия попапа через клик мыши мимо попапа

    _handleMouseClose(evt) {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }

    // публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа
    
    setEventListeners() {}
}