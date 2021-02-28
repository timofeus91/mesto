
//необходимый импорт родительского класса

import { Popup } from './Popup.js';

//класс для открытия попапа при удалении карточки и подтверждения удаления

export class AreyousurePopup extends Popup {

    //конструктор, который принимает попап селектор и кнопку подтверждения удаления
    constructor(popup, deleteCard ) {
        super(popup);
        this._buttonDelete = document.querySelector('.popup__form_areyousure');
        this._deleteCard = deleteCard;
    }


    open(id, card) {
        super.open()
        this._currentCard = id;
        this._element = card;
        
        
    }

    //метод по навешиванию слушателя на попап 
    setEventListeners() {
        super.setEventListeners();
        this._buttonDelete.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._deleteCard(this._currentCard, this._element);
            
        })

    }


}