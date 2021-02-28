
//класс который создаёт карточку с текстом и ссылкой на изображение. Экспортируется в главный файл js

 export class Card {

    //конструктор с данными карточки и селектором её template-элемента

    constructor ( data, cardSelector, handleCardClick, userRender, userId, rendererDeleteButtonCard, { handleDeleteIconClick }, api, ) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;  
        this.cardId = data._id;
        this._likes = data.likes;
        this.ownerId = data.owner._id;
        this.userId = userId;
        this._rendererDeleteButtonCard = rendererDeleteButtonCard;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._userRender = userRender;
        this._api = api; //!!!перепроверить slack!!!
         
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
        this._likeCounter = this.element.querySelector('.elements__like-counter');

        textElement.textContent = this._name;
        photoLink.src = this._link;
        photoLink.alt = this._name;
        this._likeCounter.textContent = this._likes.length;
        

        this._setEventListener()
        
        return this.element;
    } 

    
    //приватный метод по добавлению слушателей событий
    
    _setEventListener() {
        //Не понимаю как вытащить это , как и остальные Api, в index.js. Изучить slack еще раз
        const likeHeart = this.element.querySelector('.elements__heart-button'); 
        likeHeart.addEventListener('click', () => {
            if (likeHeart.classList.contains('elements__heart-button_like')) {
                this._api
                        .removeLike(this.cardId)
                        .then((data) => {
                            this._likeCounter.textContent = data.likes.length;
                            likeHeart.classList.remove('elements__heart-button_like');
                        })
                        
                        .catch((err) => {
                            console.log(err);
                        })


                    } else {
                        this._api
                        .putLike(this.cardId)
                        .then((data) => {
                            this._likeCounter.textContent = data.likes.length;
                            likeHeart.classList.add('elements__heart-button_like');
                        })
                        
                        .catch((err) => {
                            console.log(err);
                        })
                    }

                });

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
