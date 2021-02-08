//класс который настраивает валидацию полей формы

export class FormValidator {

  constructor(object, form) {
    this._form = form;
    this._formSelector = object.formSelector;
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
  }

  //метод который показывает ошибку
  //тупняк. надо изучить слак 
  _showError() {
    this._error = form.querySelector(`#${input.id}-error`);
    this._error.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }
  

  //метод который скрывает ошибку 

}