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
const popupUser = document.querySelector('.popup_user');
const openUserPopup = document.querySelector('.profile__edit-button');
const saveChangesUserForm = popupUser.querySelector('.popup__form');
const userName = popupUser.querySelector('.popup__text_topform');
const userProfession = popupUser.querySelector('.popup__text_bottomform');
const closeUserPopup = popupUser.querySelector('.popup__close');
const userPopupSave = popupUser.querySelector('.popup__save');
const nameFromDoc = document.querySelector('.profile__title');
const professionFromDoc = document.querySelector('.profile__subtitle');

//переменные по 2 попапу - добавление нового места
const popupPlace = document.querySelector('.popup_place');
const openPlacePopup = document.querySelector('.profile__add-button');
const saveChangesPlaceForm = popupPlace.querySelector('.popup__form');
const placeName = popupPlace.querySelector('.popup__text_topform');
const placeLink = popupPlace.querySelector('.popup__text_bottomform');
const closePlacePopup = popupPlace.querySelector('.popup__close');
const placePopupSave = popupPlace.querySelector('.popup__save');

//Переменные по 3 попапу
const popupImg = document.querySelector('.popup_img');
const closeImgPopup = popupImg.querySelector('.popup__close');
const imgName = popupImg.querySelector('.popup__title');
const imgLink = popupImg.querySelector('.popup__image');

//переменные по загрузке первых карточек и добавлению новых
const elementsListContainer = document.querySelector('.elements__list');
const templateContainer = document.querySelector('.template__elements-list');

//функции

//функция по запуску метода map для создания нового массива и добавлению его в html 
function renderList() {
    const listItems = initialCards.map(composeItem);
    elementsListContainer.append(...listItems);
}

//функция которая применяется для добавления новой карточки с текстом и фото, проставке лайка и удаления карточки, открытию большого варианта фото.
function composeItem(item) {
    const newElements = templateContainer.content.cloneNode(true);
    const textElement = newElements.querySelector('.elements__text');
    const photoLink = newElements.querySelector('.elements__photo');

    textElement.textContent = item.name;
    photoLink.src = item.link;
    photoLink.alt = item.name;

    const likeHeart = newElements.querySelector('.elements__heart-button');
    likeHeart.addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__heart-button_like');
    }); 

    const removeButtonElement = newElements.querySelector('.elements__delete-photo');
    removeButtonElement.addEventListener('click', removeElement);
    function removeElement(evt){
        const targetItem = evt.target.closest('.elements__item');
        targetItem.remove();
    }
    photoLink.addEventListener('click', function() {
        openHugeImg(textElement, photoLink);
    });
    return newElements;
}

//функция для открытия большого варианта фото
function openHugeImg (namePhoto, linkPhoto) {
    openPopup(popupImg);
    imgName.textContent = namePhoto.textContent;
    imgLink.src = linkPhoto.src;
    imgLink.alt = namePhoto.textContent;
}

//функция добавления новой карточки

function addNewItem(evt){
    evt.preventDefault();
    const inputtextElement = placeName.value;
    const inputphotoLink = placeLink.value;
    const newElements = composeItem({ name: inputtextElement, link: inputphotoLink });
    elementsListContainer.prepend(newElements);
    saveChangesPlaceForm.reset();
    closePopup(popupPlace);
}

//функции открытия и закрытия попапа

function openPopup (popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
    popupElement.classList.remove('popup_opened');
}

//функция по изменению имени и профессии
function userFormSubmit (evt) {
    evt.preventDefault();
    nameFromDoc.textContent = userName.value;
    professionFromDoc.textContent = userProfession.value;
    closePopup(popupUser);
}

//обработчики событий и обьявленные функции 

renderList();

openUserPopup.addEventListener('click', function() {
    openPopup(popupUser);
    userName.value = nameFromDoc.textContent;
    userProfession.value = professionFromDoc.textContent;
});

closeUserPopup.addEventListener('click', function() {
    closePopup(popupUser);
});

saveChangesUserForm.addEventListener('submit', userFormSubmit);

openPlacePopup.addEventListener('click', function() {
    openPopup(popupPlace);
});

closePlacePopup.addEventListener('click', function() {
    closePopup(popupPlace);
});

saveChangesPlaceForm.addEventListener('submit', addNewItem);

closeImgPopup.addEventListener('click', function() {
    closePopup(popupImg);
});