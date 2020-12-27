/* Коды подсказка из теории - слака

Валидация форм - отображение новых ошибок при заполнении форм через js. И это только под одну форму!!! Кошмарненько

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showError = (input, errorMessage) => {
  input.classList.add('form__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error');
  formError.classList.remove('form__input-error_active');
  formError.textContent= '';
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity();
});




Для множества форм. Плюс кнопка. Что-то на инопланетном .


function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}
function toggleButtonState(inputList, buttonElement){
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('button_inactive');
} else {
  buttonElement.classList.remove('button_inactive');
} 
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
  
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
       toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));

fieldsetList.forEach((fieldSet) => {
  setEventListeners(fieldSet);
}); 
  });
};

enableValidation();




*/




/*enableValidation({
    formSelector: '.popup__form',    - общая константа для форм
    inputSelector: '.popup__input', - общая константа на инпунты 
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 

 основная функция как понимаю будет 

 enableValidation 

*/

 const firstFormContainer = document.querySelector('.popup_user');
 const firstForm = firstFormContainer.querySelector('.popup__form');
 const topInput = firstForm.querySelector('.popup__input_topform');

 firstForm.addEventListener('submit', function(evt){
   evt.preventDefault();
   console.log('отменил отправку');
 } )

 topInput.addEventListener('input', function(evt){
   console.log(evt.target);
   console.log(evt.target.validationMessage);
   console.log(evt.target.validity);

   const input = evt.target;
   const error = firstForm.querySelector(`#${input.id}-error`); 

   error.textContent = input.validationMessage;

 })
