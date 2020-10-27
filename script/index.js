
let saveChangesPopup = document.querySelector('.popup__form');
let namePopup = document.querySelector('.popup__text_name');
let professionPopup = document.querySelector('.popup__text_profession');

let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let nameFromDoc = document.querySelector('.profile__title');
let professionFromDoc = document.querySelector('.profile__subtitle');



const popupToggle = () => {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');

    }

    else {
        namePopup.value = nameFromDoc.textContent;
        professionPopup.value = professionFromDoc.textContent;
        popup.classList.add('popup_opened');
    }

}



function formSubmitHandler (evt) {
    
    evt.preventDefault();
    nameFromDoc.textContent = namePopup.value;
    professionFromDoc.textContent = professionPopup.value;
    popupToggle();
    namePopup.value = '';
    professionPopup.value = '';
    
}


openPopup.addEventListener("click", popupToggle)
closePopup.addEventListener("click", popupToggle)
saveChangesPopup.addEventListener('submit', formSubmitHandler)


