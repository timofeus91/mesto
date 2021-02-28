//класс Popup, который отвечает за открытие и закрытие попапов

export class Popup {

    //конструктор с параметром - попап. Внутри конструктора - попап,константы этого попапа с методом bind для правильного добавления-удаления слушателя и константа этого попапа с кнопкой закрытия именно этого попапа

    constructor(popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleMouseClose = this._handleMouseClose.bind(this);
        this._closePopup = this._popup.querySelector('.popup__close');
        this.close = this.close.bind(this);
        this._submitButton = this._popup.querySelector('.popup__button');
    }

    //публичный метод open отвечающий за открытие попапа

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._handleMouseClose);
    }

    //публичный метод close отвечающий за закрытие попапа

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('click', this._handleMouseClose);
    }

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
    
    setEventListeners() {
        this._closePopup.addEventListener('click', this.close);

    }

    //публичный метод для изменения текста кнопки при api
    changeTextSubmitButton(text) {
        this._submitButton.textContent = text;
    }
}