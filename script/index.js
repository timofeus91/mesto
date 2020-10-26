

let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close');
let saveChangesPopup = document.querySelector('.popup__form');
let namePopup = document.querySelector('.popup__text');
let professionPopup = document.querySelector('.popup__text_place');
let popup = document.querySelector('.popup');
let nameFromDoc = document.querySelector('.profile__title');
let professionFromDoc = document.querySelector('.profile__subtitle');



const popupToggle = () => {
    
    popup.classList.toggle('popup_opened')
    namePopup.value = nameFromDoc.textContent;
    professionPopup.value = professionFromDoc.textContent;
}



function formSubmitHandler (evt) {
    if (popup.classList.contains('popup_opened'))
    {
    evt.preventDefault();
    nameFromDoc.textContent = namePopup.value;
    professionFromDoc.textContent = professionPopup.value;
    popupToggle();
    namePopup.value = '';
    professionPopup.value = '';
    }
}


openPopup.addEventListener("click", popupToggle)
closePopup.addEventListener("click", popupToggle)
saveChangesPopup.addEventListener('submit', formSubmitHandler)


