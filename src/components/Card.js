
//класс который создаёт карточку с текстом и ссылкой на изображение. Экспортируется в главный файл js

 export class Card {

    //конструктор с данными карточки и селектором её template-элемента

    constructor ( data, cardSelector, handleCardClick, userRender, userId, rendererDeleteButtonCard, {handleDeleteIconClick}) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._userRender = userRender;  
        this.cardId = data._id;
        this._likes = data.likes;
        this.ownerId = data.owner._id;
        this.userId = userId;
        this._rendererDeleteButtonCard = rendererDeleteButtonCard;
        this._handleDeleteIconClick = handleDeleteIconClick;


    }

    //приватный метод по клонированию template элементов

    _cardTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);

        return cardElement
    }

    //публичный метод по возвращению карточки. Используется в основном файле на функциях

    cardCreation() {
        this.element = this._cardTemplate();
        const textElement = this.element.querySelector('.elements__text');
        const photoLink = this.element.querySelector('.elements__photo');
        const likeCounter = this.element.querySelector('.elements__like-counter');

        textElement.textContent = this._name;
        photoLink.src = this._link;
        photoLink.alt = this._name;
        likeCounter.textContent = this._likes.length;
        

        this._setEventListener()
        console.log(this.element);
        return this.element;
    } 

    //публичный метод по управлению лайком

    _likeHeart(evt) {
        evt.target.classList.toggle('elements__heart-button_like');
    }
    
    //приватный метод по добавлению слушателей событий
    
    _setEventListener() {
        const likeHeart = this.element.querySelector('.elements__heart-button'); 
        likeHeart.addEventListener('click', this._likeHeart);

        const photoLink = this.element.querySelector('.elements__photo');
        photoLink.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });

        const removeButtonElement = this.element.querySelector('.elements__delete-photo');
        removeButtonElement.addEventListener('click', () => {
             this._handleDeleteIconClick(this.cardId, this.element)} );

        this._rendererDeleteButtonCard();
        

        }

        

        
    }
