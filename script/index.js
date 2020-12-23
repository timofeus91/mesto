//массив и первых шести карточек по умолчанию

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
const openUserPopup = document.querySelector('.profile__edit-button');
const saveChangesUserForm = document.getElementById('user-form');
const userName = saveChangesUserForm.querySelector('.popup__text_topform');
const userProfession = saveChangesUserForm.querySelector('.popup__text_bottomform');
const closeUserPopup = saveChangesUserForm.querySelector('.popup__close');
const popupUser = document.getElementById('popup-user');

//переменные по 2 попапу - добавление нового места
const openPlacePopup = document.querySelector('.profile__add-button');
const saveChangesPlaceForm = document.getElementById('newplace-form');
const placeName = saveChangesPlaceForm.querySelector('.popup__text_topform');
const placeLink = saveChangesPlaceForm.querySelector('.popup__text_bottomform');
const closePlacePopup = saveChangesPlaceForm.querySelector('.popup__close');
const popupPlace = document.getElementById('popup-place');

//Тут будут переменные по 3 попапу

//переменные по загрузке первых карточек и добавлению новых
const ElementsListContainer = document.querySelector('.elements__list');
const TemplateContainer = document.querySelector('.template__elements-list');


//функции

//функция по запуску метода map для создания нового массива и добавлению его в html 
function renderList() {
    const listItems = initialCards.map(composeItem);

    ElementsListContainer.append(...listItems);
}


//функция которая применяется для добавления новой карточки с текстом и фото, проставке лайка и удаления карточки
function composeItem(item) {
    
    const newElements = TemplateContainer.content.cloneNode(true);

    const TextElement = newElements.querySelector('.elements__text');
    const PhotoLink = newElements.querySelector('.elements__photo');

    TextElement.textContent = item.name;
    PhotoLink.src = item.link;

    const LikeHeart = newElements.querySelector('.elements__heart-button');
    LikeHeart.addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__heart-button_like');
    }); 

    const removeButtonElement = newElements.querySelector('.elements__delete-photo');
    removeButtonElement.addEventListener('click', removeElement);
    

    return newElements;

}

//универсальная функция для удаления. У нас применяется только для удаления карточек в функции composeItem
function removeElement(evt){
    const TargetItem = evt.target.closest('.elements__item');
    TargetItem.remove();
}


//функции открытия и закрытия попапа

function openPopup (popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
    popupElement.classList.remove('popup_opened');
}


//ЧТО БЛИН ТЕПЕРЬ С ЭТИМ ДЕЛАТЬ?! Как сделать универсальную для всех попапов? под каждый свой? Изучи слак!

function userFormSubmit (evt) {
    
    evt.preventDefault();
    nameFromDoc.textContent = namePopup.value;
    professionFromDoc.textContent = professionPopup.value;
    popupOpenClosed();
    namePopup.value = '';
    professionPopup.value = '';
    
}


//обработчики событий и обьявленные функции 

renderList();

openUserPopup.addEventListener('click', function() {
    openPopup(popupUser);
});
closeUserPopup.addEventListener('click', function() {
    closePopup(popupUser);
});

console.log(closeUserPopup);
console.log(userName);