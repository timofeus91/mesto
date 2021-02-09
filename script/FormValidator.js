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
  
  _showError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = this._input.validationMessage;
    this._input.classList.add(this._inputErrorClass);
  }
  
  //метод который скрывает ошибку

  _hideError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = '';
    this._input.classList.remove(this._inputErrorClass);
  }

//метод по проверке инпута на валидность.

_checkInputValidity(input) {
  this._input = input;
  if (!this._input.validity.valid) {
    this._showError();
    
  } else {
    this._hideError();

  }
}

  // метод по проверке кнопки отправки формы и включению-выключению ее активности

_setButtonState(isActive) {
  this._button = this._form.querySelector(this._submitButtonSelector);
  if (isActive) {
    this._button.classList.remove(this._inactiveButtonClass)
    this._button.disabled = false;
  } else {
    this._button.classList.add(this._inactiveButtonClass)
    this._button.disabled = true;
  }
}

//метод по переборке forEach чтобы добавить слушателей. 

_setEventListener() {
  this._inputList = this._form.querySelectorAll(this._inputSelector);
  
  this._inputList.forEach(input => {
    input.addEventListener('input', (evt) => {
    this._checkInputValidity(input)
    this._setButtonState(this._form.checkValidity())
  })
})
}

//публичный метод по включению валидации у нужной формы

enableValidation(){
  this._setEventListener()
  this._form.addEventListener('submit', () => {
    this._setButtonState(this._form.checkValidity())
  })

}

}