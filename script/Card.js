//импорт необходимой функции из главного файла js

import { openHugeImg } from './index.js';

//класс который создаёт карточку с текстом и ссылкой на изображение. Экспортируется в главный файл js

 export class Card {

    //конструктор с данными карточки и селектором её template-элемента

    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    //приватный метод по клонированию template элементов

    _cardTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);

        return cardElement
    }

    //публичный метод по возвращению карточки. Используется в основном файле на функциях

    cardCreation() {
        this._element = this._cardTemplate();
        const textElement = this._element.querySelector('.elements__text');
        const photoLink = this._element.querySelector('.elements__photo');

        textElement.textContent = this._name;
        photoLink.src = this._link;
        photoLink.alt = this._name;

        this._setEventListener()

        return this._element;
    } 

    //приватный метод по добавлению слушателей событий
    
    _setEventListener() {
        const likeHeart = this._element.querySelector('.elements__heart-button'); 

        likeHeart.addEventListener('click', (evt) => {
            evt.target.classList.toggle('elements__heart-button_like');
        }) 

        const textElement = this._element.querySelector('.elements__text');
        const photoLink = this._element.querySelector('.elements__photo');

        photoLink.addEventListener('click', () => {
            openHugeImg(textElement, photoLink);
        })

        const removeButtonElement = this._element.querySelector('.elements__delete-photo');

        removeButtonElement.addEventListener('click', removeElement);
        function removeElement(evt) {
        const targetItem = evt.target.closest('.elements__item');
        targetItem.remove();
        }
    }
}