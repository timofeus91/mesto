// функция которая показывает ошибку
/*
function showError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
}

// функция которая скрывает ошибку

function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove(config.inputErrorClass);
}

//функция которая проверяет конкретный input на валидность

function checkInputValidity(form, input, config) {
  if (!input.validity.valid) {
    showError(form, input, config);
    
  } else {
    hideError(form, input, config);
  }
}

// функция по проверке кнопки отправки формы и включению-выключению ее активности

function setButtonState(button, isActive, config) {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass)
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass)
    button.disabled = true;
  }
}

//функция по поиску всех input-s и button-s , переборке формы.

function setEventListener(form, config){
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  
  inputList.forEach(input => {
    input.addEventListener('input', (evt) => {
    checkInputValidity(form, input, config)
    setButtonState(submitButton, form.checkValidity(), config)
  })
})
}

// функция по поиску всех форм. Запрет на действия по умолчанию

function enableValidation(config){
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach(form => {
    setEventListener(form, config);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config)
  });
}