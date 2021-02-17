//Необходимые импорты из других файлов js

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
/* import { КОНСТАНТЫ } from '../components/constants.js'; */

/* Заккоментить весь код для редактуры!!!!!!
//массив из первых шести карточек по умолчанию

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];




//переменные 

//переменные по 1 попапу - пользователь

const popupUser = document.querySelector('.popup_user');
const openUserPopup = document.querySelector('.profile__edit-button');
const userForm = popupUser.querySelector('.popup__form');
const userName = popupUser.querySelector('.popup__input_topform');
const userAbout = popupUser.querySelector('.popup__input_bottomform');
const closeUserPopup = popupUser.querySelector('.popup__close');
const nameFromDoc = document.querySelector('.profile__title');
const aboutUserFromDoc = document.querySelector('.profile__subtitle');

//переменные по 2 попапу - добавление нового места

const popupPlace = document.querySelector('.popup_place');
const openPlacePopup = document.querySelector('.profile__add-button');
const placeForm = popupPlace.querySelector('.popup__form');
const placeName = popupPlace.querySelector('.popup__input_topform');
const placeLink = popupPlace.querySelector('.popup__input_bottomform');
const closePlacePopup = popupPlace.querySelector('.popup__close');

//Переменные по 3 попапу

const popupImg = document.querySelector('.popup_img');
const closeImgPopup = popupImg.querySelector('.popup__close');
const imgName = popupImg.querySelector('.popup__title');
const imgLink = popupImg.querySelector('.popup__image');

//переменная по загрузке первых карточек и добавлению новых

const elementsListContainer = document.querySelector('.elements__list');

// переменные с новыми классами для валидации

const userFormValidation = new FormValidator(validationConfig, userForm);
const placeFormValidation = new FormValidator(validationConfig, placeForm);

//обьявление функций для валидации 

startValidation(userFormValidation);
startValidation(placeFormValidation);

//функции


//функция по запуску валидации на форму

function startValidation(item) {
    item.enableValidation();
}

//базовая функция по созданию карточки с использованием класса Card. Используется для добавления первых 6 карточек и добавления карточек пользователем. 

function createNewCard(item) {
    const newCard = new Card(item, '.template__elements-list');
    return newCard.cardCreation();
}

//функция по запуску метода forEach для добавления в html первых 6 карточек из массива initialCards

function renderList() {
    initialCards.forEach(item => {
    const listItems = createNewCard(item);
    elementsListContainer.append(listItems);
    });
}

//функция для открытия большого варианта фото. Экспортируется в Card.js для использования в классе

function handleCardClick(name, link) {
    openPopup(popupImg);
    const hugeImg = evt.target;
    imgName.textContent = hugeImg.alt;
    imgLink.src = hugeImg.src;
    imgLink.alt = hugeImg.alt;
}

//функция добавления новой карточки пользователем

function addNewItem(evt) {
    evt.preventDefault();
    const inputtextElement = placeName.value;
    const inputphotoLink = placeLink.value;
    const newElements = createNewCard({ name: inputtextElement, link: inputphotoLink });
    elementsListContainer.prepend(newElements);
    placeForm.reset();
    closePopup(popupPlace);
}

//функции открытия и закрытия попапа

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', escapeClosePopup);
    popupElement.addEventListener('click', mouseClosePopup);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', escapeClosePopup);
    popupElement.removeEventListener('click', mouseClosePopup);
}

//функция которая закрывает popup через клавишу ESC

function escapeClosePopup(evt) {
    const popupOpenedEscape = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popupOpenedEscape);
    }
}

//функция по закрытию попапа через нажатие кнопки мыши мимо попапа

function mouseClosePopup(evt) {
    if (evt.target.classList.contains('popup'))
        closePopup(evt.target)
}

//функция по изменению имени и профессии

function userFormSubmit(evt) {
    evt.preventDefault();
    nameFromDoc.textContent = userName.value;
    aboutUserFromDoc.textContent = userAbout.value;
    closePopup(popupUser);
}

//обработчики событий и обьявленные функции 


//объявление функции для добалвения первых 6 карточек 

renderList();

//открытие попапа карточки пользователя, очистка ошибок в инпутах этой формы и добавление слушателей

openUserPopup.addEventListener('click', function () {
    
    openPopup(popupUser);
    userName.value = nameFromDoc.textContent;
    userAbout.value = aboutUserFromDoc.textContent;
    userFormValidation.resetValidation();
});

closeUserPopup.addEventListener('click', function () {
    closePopup(popupUser);
});

userForm.addEventListener('submit', userFormSubmit);

//открытие попапа карточки места и очистка ошибок инпутов этой формы

openPlacePopup.addEventListener('click', function () {
    
    openPopup(popupPlace);
    placeFormValidation.resetValidation();
});

closePlacePopup.addEventListener('click', function () {
    closePopup(popupPlace);
});

placeForm.addEventListener('submit', addNewItem);

closeImgPopup.addEventListener('click', function () {
    closePopup(popupImg);
});

*/



//!!!переменные для переноса в другой файл!!!

//Переменные по 3 попапу

const popupImg = document.querySelector('.popup_img');
const closeImgPopup = popupImg.querySelector('.popup__close');

//объект со списком ключей-значений для запуска функций связанных с валидацией

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
  }
//переменные по 1 попапу (имя- профессия )
  const popupUser = document.querySelector('.popup_user');
  const userForm = popupUser.querySelector('.popup__form');


// переменные по 2 попапу (добавление новой карточки)
const popupPlace = document.querySelector('.popup_place');
const placeForm = popupPlace.querySelector('.popup__form');





//переменные в которых записаны создания экземпляров классов 

//переменная по открытию большого варианта фото

const hugeImg = new PopupWithImage(popupImg);

// переменные с экземплярами класса для валидации

const userFormValidation = new FormValidator(validationConfig, userForm);
const placeFormValidation = new FormValidator(validationConfig, placeForm);

//переменная с экземпляром класса для отображения имени-профессии 

const userNameAbout = new UserInfo({ nameFromDoc: '.profile__title', aboutUserFromDoc: '.profile__subtitle' });






//функции

//функция по запуску валидации на форму

function startValidation(item) {
    item.enableValidation();
}

//базовая функция по созданию карточки с использованием класса Card. Используется для добавления первых 6 карточек и добавления карточек пользователем. 

function createNewCard(item) {
    const newCard = new Card(item, '.template__elements-list', () => {
        hugeImg.open(item);
    });
    return newCard.cardCreation();
}


//обьявление функций для валидации 

startValidation(userFormValidation);
startValidation(placeFormValidation);










