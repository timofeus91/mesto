
// функция которая показывает ошибку
function showError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classlist.add(inputErrorClass);
}

// функция которая скрывает ошибку

function hideError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classlist.remove(inputErrorClass);
}

//функция которая проверяет конкретный input на валидность

function checkInputValidity(form, input) {
  if (input.validity.valid) {
    hideError(form, input);
  } else {
    showError(form, input);
  }
}

// функция по проверке кнопки отправки формы и включению-выключению ее активности
function setButtonState(button, isActive) {
  if (isActive) {
    button.classlist.remove(inactiveButtonClass)
    button.disabled = false;
  } else {
    button.classlist.add(inactiveButtonClass)
    button.disabled = true;
  }
}

//функция по поиску всех input-s и button-s , переборке формы.
function setEventListener(form){
  const inputList = document.querySelectorAll(inputSelector);
  const submitButton = document.querySelector(submitButtonSelector);

  inputList.forEach(input => {
  input.addEventListener('input', (evt) => {
    checkInputValidity(form, input)
    setButtonState(submitButton, form.checkInputValidity())
  })
})
}

// функция по поиску всех форм. Запрет на действия по умолчанию
function enableValidation(){
  const forms = document.querySelectorAll(formSelector);
  forms.forEach(form => {
    setEventListener(form)

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    const submitButton = document.querySelector(submitButtonSelector);
    setButtonState(submitButton, form.checkInputValidity())
  })
}


