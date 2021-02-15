//необходимый импорт родительского класса

import { Popup } from "./Popup";

//класс PopupWithImage который наследует от Popup. Нужен для открытия большого варианта фотографии 

export class PopupWithImage extends Popup {

    // конструктор которая принимает попап большого варианта фота
    constructor(popupSelector) {
        super(popupSelector);
        
    }

    //переписанный публичный метод для открытия большого варианата фотографии
    
    open(namePhoto, linkPhoto) {
        super.open();
        const imgName = popupImg.querySelector('.popup__title');
        const imgLink = popupImg.querySelector('.popup__image');
        imgName.textContent = namePhoto.textContent;
        imgLink.src = linkPhoto.src;
        imgLink.alt = namePhoto.textContent;
    }

}