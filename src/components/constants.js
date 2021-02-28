//константы 

 

//Переменные по 3 попапу

export const popupImg = document.querySelector('.popup_img');


//объект со списком ключей-значений для запуска функций связанных с валидацией

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error'
  }
  
//переменные по 1 попапу (имя- профессия )
export  const popupUser = document.querySelector('.popup_user');
export  const userForm = popupUser.querySelector('.popup__form');
export  const openUserPopup = document.querySelector('.profile__edit-button');
export  const userName = popupUser.querySelector('.popup__input_topform');
export  const userAbout = popupUser.querySelector('.popup__input_bottomform');


// переменные по 2 попапу (добавление новой карточки)
export const popupPlace = document.querySelector('.popup_place');
export const placeForm = popupPlace.querySelector('.popup__form');
export const openPlacePopup = document.querySelector('.profile__add-button');


//контейнер для загрузки первых карточек и добавлению новых

export const elementsListContainer = document.querySelector('.elements__list');

//переменные по попапу новой аватарки 
export const avatarPopup = document.querySelector('.popup_new-avatar');
export const openAvatarPopup = document.querySelector('.profile__avatar-edit');
export const avatarForm = avatarPopup.querySelector('.popup__form');


//переменные по попапу уточнению
export const surePopup = document.querySelector('.popup_areyousure');
