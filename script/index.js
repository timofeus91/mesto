//Необходимые импорты из других файлов js

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
 import { elementsListContainer, placeLink, placeName, openPlacePopup, placeForm, popupPlace, userAbout, userName, openUserPopup, userForm, popupUser, validationConfig, popupImg, initialCards } from '../components/constants.js';









//переменные в которых записаны создания экземпляров классов 

//переменная по создания экземпляра класса PopupWithImage для большого варианта фото

const hugeImg = new PopupWithImage(popupImg);

// переменные с экземплярами класса для валидации

const userFormValidation = new FormValidator(validationConfig, userForm);
const placeFormValidation = new FormValidator(validationConfig, placeForm);

//переменная с экземпляром класса для отображения имени-профессии 

const userNameAbout = new UserInfo({ nameFromDoc: '.profile__title', aboutUserFromDoc: '.profile__subtitle' });

//переменная с экземпляром класса Section для добавления первых 6 карточек 

const cardList = new Section( 
    { items: initialCards,
     renderer: (item) => {
         const listElement = createNewCard(item);
         cardList.addItem(listElement);
     } }, 
     elementsListContainer
);

//переменная с экземпляром класса PopupWithForm для попапа имзенения имени-профессии 

const editUser = new PopupWithForm(popupUser, (evt) => {
    evt.preventDefault();
    const name = userName.value;
    const about = userAbout.value;
    userNameAbout.setUserInfo(name, about);
    console.log(name, about);
    editUser.close()
});

//переменная с экземпляром класса PopupWithForm для попапа добавления нового места 

const addNewPlace = new PopupWithForm(popupPlace, (evt) => {
    evt.preventDefault();
    const inputtextElement = placeName.value;
    const inputphotoLink = placeLink.value;
    const newElements = createNewCard({ name: inputtextElement, link: inputphotoLink });
    elementsListContainer.prepend(newElements);
    addNewPlace.close();

})




//запуск методов на экземпляры классов

//запуск метода по навешиванию слушателя на экземпляр класса большого фото 

hugeImg.setEventListeners();

//запуск метода по навешиванию слушателя на экземпляр класса PopupWithForm

editUser.setEventListeners();

//запуск метода по навешиванию слушателя на экземпляр класса PopupWithForm

addNewPlace.setEventListeners();

//запуск метода для рендера карточек

cardList.renderItems();


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






//открытие попапа карточки пользователя, очистка ошибок в инпутах этой формы и добавление слушателей

openUserPopup.addEventListener('click', function () {
    editUser.open();
    userFormValidation.resetValidation();
    const { name, about } = userNameAbout.getUserInfo();
    userName.value = name.textContent;
    userAbout.value = about.textContent;
    editUser.open();
    
    
});


//открытие попапа карточки места и очистка ошибок инпутов этой формы

openPlacePopup.addEventListener('click', function () {
    
    addNewPlace.open();
    placeFormValidation.resetValidation();
}); 

