//переменные

let OpenPopup = document.querySelector('.profile__edit-button');
let ClosePopup = document.querySelector('.popup__close');
let SavaChangesPopup = document.querySelector('.popup__save');
let NamePopup = document.querySelector('.popup__name');
let ProfessionPopup = document.querySelector('.popup__profession');





//проверка по окончании скрипта на его работу (ну или что-то похожее)
function showClick() {
    alert('ты подключил js красавааа!');
}

OpenPopup.addEventListener('click', showClick);

