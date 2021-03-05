
//класс который создаёт карточку с текстом и ссылкой на изображение. Экспортируется в главный файл js

 export class Card {

    //конструктор с данными карточки и селектором её template-элемента

    constructor ( data, cardSelector, handleCardClick, userRender, userId, { handleDeleteIconClick }, api, apiLike) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;  
        this.cardId = data._id;
        this.likes = data.likes;
        this.ownerId = data.owner._id;
        this.userId = userId;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._userRender = userRender;
        this.api = api;
        
        this._apiLike = apiLike;
         
    }

    //приватный метод по клонированию template элементов

    _cardTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);

        return cardElement
    }

    //публичный метод по возвращению карточки. Используется в основном файле на функциях

    cardCreation() {
        this.element = this._cardTemplate();
        const textElement = this.element.querySelector('.elements__text');
        const photoLink = this.element.querySelector('.elements__photo');
        this.likeCounter = this.element.querySelector('.elements__like-counter');

        textElement.textContent = this._name;
        photoLink.src = this._link;
        photoLink.alt = this._name;
        this.likeCounter.textContent = this.likes.length;
        

        this._setEventListener()

        return this.element;
    } 

    //приватный метод по проверке ,ставил ли я лайк картинке или нет, при загрузке карточек

    _checkLike() {
    this.likes.forEach((item) => {
        if(item._id == this.userId) {
            this.element.querySelector('.elements__heart-button').classList.add('elements__heart-button_like');
        }
    })
    }


    //приватный метод по рендеру иконки удаления на карточке

    _rendererDeleteButtonCard() {
    const deleteButton = this.element.querySelector('.elements__delete-photo');
    if (this.ownerId === this.userId) {
        deleteButton.classList.add('elements__delete-photo_active');
    }
    }



    
    //приватный метод по добавлению слушателей событий
    
    _setEventListener() {
        
        const likeHeart = this.element.querySelector('.elements__heart-button'); 
        likeHeart.addEventListener('click', () => {
            this._apiLike(this.cardId);
                });

        const photoLink = this.element.querySelector('.elements__photo');
        photoLink.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });

        const removeButtonElement = this.element.querySelector('.elements__delete-photo');
        removeButtonElement.addEventListener('click', () => {
             this._handleDeleteIconClick(this.cardId, this.element)} );

        this._rendererDeleteButtonCard();

        this._checkLike();

        this._rendererDeleteButtonCard();
        

        }


    }
