//необходимый импорт родительского класса

import { Popup } from "./Popup.js";

//класс PopupWithImage который наследует от Popup. Нужен для открытия большого варианта фотографии 

export class PopupWithImage extends Popup {

    // конструктор которая принимает попап большого варианта фота
    constructor(popupSelector) {
        super(popupSelector);
        
    }

    //переписанный публичный метод для открытия большого варианата фотографии
    
    open(namePhoto, linkPhoto) {
        super.open();
        const imgName = document.querySelector('.popup__title_img');
        const imgLink = document.querySelector('.popup__image');
        imgName.textContent = namePhoto;
        imgLink.src = linkPhoto;
        imgLink.alt = namePhoto;
    }

}