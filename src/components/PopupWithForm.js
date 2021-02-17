//необходимый импорт родительского класса

import { Popup } from './Popup.js';

//Класс для открытия попапов форм ( добавление пользователя, добавление новой карточки)

export class PopupWithForm extends Popup {

    //конструктор который принимает выбранный попап с формами и функцию, которая выполняется после submit 
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popupSelector.querySelector('.popup__form');
    }

    //приватный метод , который собирает данные всех полей формы и возвращает их
    __getInputValues() {
        const inputList = {};
        const allInput = this._form.querySelectorAll('.popup__input');
        allInput.forEach(item => {
            inputList[item.name] = item.value;
        })

        return inputList;
    }
    
    //перезапись родительского метода setEventListeners. Добавление обработчика сабмита формы 
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', this._submitForm);
    }

    //перезапись родительского метода close. Добавление сбрасывания формы при закрытии 
    close() {
        super.close();
        this._form.reset();
    }
}