console.log('Hello world');

// все нужные переменные

let OpenPopup = document.querySelector('.profile__edit-button');
let ClosePopup = document.querySelector('.popup__close');
let SavaChangesPopup = document.querySelector('.popup__save');
let NamePopup = document.querySelector('.popup__name');
let ProfessionPopup = document.querySelector('.popup__profession');
let popup = document.querySelector('.popup');
let NameFromDoc = document.querySelector('.profile__title');
let ProfessionFromDoc = document.querySelector('.profile__profile__subtitle');


const PopupToggle = () => {
    popup.classList.toggle('popup_opened')
}

OpenPopup.addEventListener("click", PopupToggle)
ClosePopup.addEventListener("click", PopupToggle)


