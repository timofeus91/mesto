//необходимый импорт родительского класса

import { Popup } from "./Popup.js";

//класс PopupWithImage который наследует от Popup. Нужен для открытия большого варианта фотографии 

export class PopupWithImage extends Popup {

    // конструктор которая принимает попап большого варианта фота
    constructor(popup) {
        super(popup);
        this._imgName = document.querySelector('.popup__title_img');
        this._imgLink = document.querySelector('.popup__image');
        
    }

    //переписанный публичный метод для открытия большого варианата фотографии
    
    open(namePhoto, linkPhoto) {
        super.open();   
        this._imgName.textContent = namePhoto;
        this._imgLink.src = linkPhoto;
        this._imgLink.alt = namePhoto;
    }

}