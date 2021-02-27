import './index.css'; 
//Необходимые импорты из других файлов js

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { elementsListContainer, placeLink, placeName, openPlacePopup, placeForm, popupPlace, userAbout, userName, openUserPopup, userForm, popupUser, validationConfig, popupImg } from '../components/constants.js';

import { Api } from '../components/Api.js';


//переменные в которых записаны создания экземпляров классов 


//переменная в которую записан экземпляр класса Api для подключения Api

const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-20/", 
    headers: {
        "content-type": "application/json",
        "Authorization": "43c52a6d-19a6-461e-b067-2db5e03ba70b",
    }
});

const tryGetUserInfo = api.getUserInfo()
console.log(tryGetUserInfo);






//новые переменные , которые потом перенести в constants

//переменные по попапу новой аватарки 
const avatarPopup = document.querySelector('.popup_new-avatar');
const openAvatarPopup = document.querySelector('.profile__avatar-edit');
const avatarForm = avatarPopup.querySelector('.popup__form');
const avatarLink = avatarPopup.querySelector('.popup__input_topform');

//переменные по попапу уточнению
const surePopup = document.querySelector('.popup_areyousure');
const sureForm = surePopup.querySelector('.popup__form');

//переменная с количеством лайков







//переменная по создания экземпляра класса PopupWithImage для большого варианта фото

const hugeImg = new PopupWithImage(popupImg);

// переменные с экземплярами класса для валидации

const userAvatarValidation = new FormValidator(validationConfig, avatarForm);
const userFormValidation = new FormValidator(validationConfig, userForm);
const placeFormValidation = new FormValidator(validationConfig, placeForm);

//переменная с экземпляром класса для отображения имени-профессии 

const userNameAbout = new UserInfo({ nameFromDoc: '.profile__title', aboutUserFromDoc: '.profile__subtitle' });




// Загрузка первых карточек с помощью Api . (OMG!)
api
    .getInitialCards()
    .then(data => {
    const cardList = new Section( 
        { items: data,
          renderer: (item) => {
             const listElement = createNewCard(item);
             cardList.addItem(listElement);
          } 
        }, 
         elementsListContainer
    )
    cardList.renderItems();

   })
   .catch((err) => {
       console.log(err);
   })



// Загрузка новой карточки с помощью Api
const addNewPlace = new PopupWithForm(popupPlace, (values) => {
    const data = {name: values['popup-name-place'], link: values['popup-link-photo']};
    api
        .addNewCard(data)
        .then(data => {
            const newElements = createNewCard(data);
            
            const newElementsLoading = new Section({
                items: data,
                renderer: () => {}
            }, elementsListContainer)
            newElementsLoading.prependItem(newElements);
        })

        .catch((err) => {
            console.log(err);
        })

        .finally(() => {
            addNewPlace.close();
        })

});


//Смена аватара с помощью Api

const newAvatar = new PopupWithForm(avatarPopup, (values) => {
    const avatar = {link: values['new-avatar-photo']}
    
    api
        .editUserAvatar(avatar)
        .then(data => {
            userNameAbout.setUserAvatar(data.avatar);
        }) 

        .catch((err) => {
            console.log(err);
        })

        .finally(() => {
            newAvatar.close();
        })

}); 



//переменная с экземпляром класса PopupWithForm для попапа изменения имени-профессии при помощи APi 

const editUserPopup = new PopupWithForm(popupUser, (values) => {
    const newUserInfo = { name: values['popup-name'], about: values['popup-about'] };
    api
        .editUserInfo(newUserInfo)
        .then(data => {
            userNameAbout.setUserInfo(data);
        })

        .catch((err) => {
            console.log(err);
        })

        .finally(() => {
            editUserPopup.close()
        })
    
    
});


//запуск методов на экземпляры классов

//запуск метода по навешиванию слушателя на экземпляр класса большого фото 

hugeImg.setEventListeners();

//запуск метода по навешиванию слушателя на экземпляр класса PopupWithForm

editUserPopup.setEventListeners();

//запуск метода по навешиванию слушателя на экземпляр класса PopupWithForm

addNewPlace.setEventListeners();

//запуск метода по навешиванию слушателя на экземпляр класса PopupWithForm

newAvatar.setEventListeners();

//функции


//функция для открытия большого варианта фото. Используется в классе Card . 

function handleCardClick(name, link) {
    hugeImg.open(name, link);
}

//функция по запуску валидации на форму

function startValidation(item) {
    item.enableValidation();
}

//базовая функция по созданию карточки с использованием класса Card. Используется для добавления первых 6 карточек и добавления карточек пользователем. 

function createNewCard(item) {
    const newCard = new Card(item, '.template__elements-list', handleCardClick);
    return newCard.cardCreation();
}


//обьявление функций для валидации 

startValidation(userFormValidation);
startValidation(placeFormValidation);
startValidation(userAvatarValidation);

//открытие попапа смены аватарки пользователя, очистка ошибок в инпутах этой формы.

openAvatarPopup.addEventListener('click', function () {
    newAvatar.open();
    userAvatarValidation.resetValidation();
})

//открытие попапа карточки пользователя, очистка ошибок в инпутах этой формы и добавление слушателей

openUserPopup.addEventListener('click', function () {
    editUserPopup.open();
    userFormValidation.resetValidation();
    const { name, about } = userNameAbout.getUserInfo();
    userName.value = name.textContent;
    userAbout.value = about.textContent;
    
});


//открытие попапа карточки места и очистка ошибок инпутов этой формы

openPlacePopup.addEventListener('click', function () {
    
    addNewPlace.open();
    placeFormValidation.resetValidation();
}); 