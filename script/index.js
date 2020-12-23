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

//здесь все что связана с вызовом первых карточек и добавлением-удалением новых-старых.
//позже нужно распределить по разделам ниже


//переменная в которой обозначен контейнер из html (ul в который будут клонироваться li) куда добавляются карточки
const ElementsListContainer = document.querySelector('.elements__list');
//переменная куда добавлен template элемент для клонирования и добавления
const TemplateContainer = document.querySelector('.template__elements-list');


//функция для того чтобы рендерить(загружать) список в которой прописано константа которая является методом к которой применяется определенная функция для добавлений вещей из массива 

function renderList() {
    const listItems = initialCards.map(composeItem);

    ElementsListContainer.append(...listItems);
}


//ниже функция которая применяется для добавления новой карточки с 2 параметрами - названием места и ссылкой на фото

function composeItem(item) {
    //ниже константа в которой мы прописываем откуда все данные берет новая карточка( берет из клонированного элемента темплайт. А копирует пока не пройдет весь массив благодаря методу map выше к которому эта функция и будет применена и также будем применять эту функцию для добавления новых карточек через новый попап)
    const newElements = TemplateContainer.content.cloneNode(true);

    const TextElement = newElements.querySelector('.elements__text');
    const PhotoLink = newElements.querySelector('.elements__photo');

    newElements.querySelector('.elements__heart-button').addEventListener('click', function (evt) {
    
        evt.target.classList.toggle('elements__heart-button_like');
    }); 

    TextElement.textContent = item.name;
    PhotoLink.src = item.link;
    


    return newElements;

}



//переменные
let saveChangesPopup = document.querySelector('.popup__form');
let namePopup = document.querySelector('.popup__text_name');
let professionPopup = document.querySelector('.popup__text_profession');
let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let nameFromDoc = document.querySelector('.profile__title');
let professionFromDoc = document.querySelector('.profile__subtitle');


//переменная лайка
//let heartLike = document.querySelector('.elements__heart-button');





//функции открытия и закрытия попапа

function OpenPopup (popupElement) {
    popupElement.classList.add('.popup-opened');
}

function ClosePopup (popupElement) {
    popupElement.classList.remove('.popup-opened');
}
//ЧТО БЛИН ТЕПЕРЬ С ЭТИМ ДЕЛАТЬ?! Как сделать универсальную для всех попапов? под каждый свой? Изучи слак!

function formSubmitHandler (evt) {
    
    evt.preventDefault();
    nameFromDoc.textContent = namePopup.value;
    professionFromDoc.textContent = professionPopup.value;
    popupOpenClosed();
    namePopup.value = '';
    professionPopup.value = '';
    
}

//обработчики событий и обьявленные функции 

renderList();

//heartLike.addEventListener('click', function (evt) {
//    evt.target.classList.toggle('elements__heart-button_like');
//    console.log('Кнопка нажалась!');
// });  




