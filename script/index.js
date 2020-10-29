//переменные
let saveChangesPopup = document.querySelector('.popup__form');
let namePopup = document.querySelector('.popup__text_name');
let professionPopup = document.querySelector('.popup__text_profession');
let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let nameFromDoc = document.querySelector('.profile__title');
let professionFromDoc = document.querySelector('.profile__subtitle');
let heartLike = document.querySelectorAll('.elements__heart-button');




//стрелочная функция открытия попапа

const popupOpenClosed = () => {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');

    }

    else {
        namePopup.value = nameFromDoc.textContent;
        professionPopup.value = professionFromDoc.textContent;
        popup.classList.add('popup_opened');
    }

}

//функция по записи изменений имени и профессии в <section> class='profile'

function formSubmitHandler (evt) {
    
    evt.preventDefault();
    nameFromDoc.textContent = namePopup.value;
    professionFromDoc.textContent = professionPopup.value;
    popupOpenClosed();
    namePopup.value = '';
    professionPopup.value = '';
    
}

//обработчики событий
openPopup.addEventListener("click", popupOpenClosed)
closePopup.addEventListener("click", popupOpenClosed)
saveChangesPopup.addEventListener('submit', formSubmitHandler)

heartLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle('elements__heart-button_like');
    
});




