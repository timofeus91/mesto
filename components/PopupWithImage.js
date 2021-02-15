//класс PopupWithImage который наследует от Popup. Нужен для открытия большого варианта фотографии 

import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
    constructor() {
        super();
    }

    open(evt) {
        super.open();
        const hugeImg = evt.target;
        imgName.textContent = hugeImg.alt;
        imgLink.src = hugeImg.src;
        imgLink.alt = hugeImg.alt;
    }
}