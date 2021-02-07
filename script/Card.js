//переменные по загрузке первых карточек и добавлению новых

const elementsListContainer = document.querySelector('.elements__list');
const templateContainer = document.querySelector('.template__elements-list');

//класс который создаёт карточку с текстом и ссылкой на изображение.
class Card {

    //конструктор с данными карточки и селектором её template-элемента
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    //метод по клонированию template элементов
    _cardTemplate() {

    }
}