//Необходимые импорты из других файлов js

import { Card } from './Card.js';

import { FormValidator } from './FormValidator.js';

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
const saveChangesUserForm = popupUser.querySelector('.popup__form');
const userName = popupUser.querySelector('.popup__input_topform');
const userAbout = popupUser.querySelector('.popup__input_bottomform');
const closeUserPopup = popupUser.querySelector('.popup__close');
const nameFromDoc = document.querySelector('.profile__title');
const aboutUserFromDoc = document.querySelector('.profile__subtitle');

//переменные по 2 попапу - добавление нового места

const popupPlace = document.querySelector('.popup_place');
const openPlacePopup = document.querySelector('.profile__add-button');
const saveChangesPlaceForm = popupPlace.querySelector('.popup__form');
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


//функции

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

export function openHugeImg(namePhoto, linkPhoto) {
    openPopup(popupImg);
    imgName.textContent = namePhoto.textContent;
    imgLink.src = linkPhoto.src;
    imgLink.alt = namePhoto.textContent;
}

//функция добавления новой карточки пользователем

function addNewItem(evt) {
    evt.preventDefault();
    const inputtextElement = placeName.value;
    const inputphotoLink = placeLink.value;
    const newElements = createNewCard({ name: inputtextElement, link: inputphotoLink });
    elementsListContainer.prepend(newElements);
    saveChangesPlaceForm.reset();
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
    const PopupOpenedEscape = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(PopupOpenedEscape);
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

renderList();

openUserPopup.addEventListener('click', function () {
    openPopup(popupUser);
    userName.value = nameFromDoc.textContent;
    userAbout.value = aboutUserFromDoc.textContent;
});

closeUserPopup.addEventListener('click', function () {
    closePopup(popupUser);
});

saveChangesUserForm.addEventListener('submit', userFormSubmit);

openPlacePopup.addEventListener('click', function () {
    openPopup(popupPlace);
});

closePlacePopup.addEventListener('click', function () {
    closePopup(popupPlace);
});

saveChangesPlaceForm.addEventListener('submit', addNewItem);

closeImgPopup.addEventListener('click', function () {
    closePopup(popupImg);
});

//объект со списком ключей-значений для запуска функций связанных с валидацией

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
  }

//запуск функции валидации форм 

//enableValidation(validationConfig); 

