//необходимый импорт родительского класса

import { Popup } from './Popup.js';

//Класс для открытия попапов форм ( добавление пользователя, добавление новой карточки)

export class PopupWithForm extends Popup {

    //конструктор который принимает выбранный попап с формами и функцию, которая выполняется после submit 
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        
        
    }

       //приватный метод , который собирает данные всех полей формы и возвращает их
       _getInputValues() {
        const values = {};
        const allValue = this._form.querySelectorAll('.popup__input');
        allValue.forEach(item => {
            values[item.name] = item.value;
        })
        return values
        
    }
    
    //перезапись родительского метода setEventListeners. Добавление обработчика сабмита формы 
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        });
    }

    //перезапись родительского метода close. Добавление сбрасывания формы при закрытии 
    close() {
        super.close();
        this._form.reset();
    }

    
}