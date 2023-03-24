const showInputError = (errorTextElement, validationMessage, activeErrorClass) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
}

const hideInputError = (errorTextElement, activeErrorClass) => {
  errorTextElement.classList.remove(activeErrorClass);
}

const disableButton = (submitButton, invalidSubmitButtonClass) => {
  submitButton.classList.remove(invalidSubmitButtonClass);
  submitButton.disabled = true;
}

const enableButton = (submitButton, invalidSubmitButtonClass) => {
  submitButton.classList.add(invalidSubmitButtonClass);
  submitButton.disabled = false;
}

const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
  const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`)
  if (!input.validity.valid) {
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  } else {
    hideInputError(errorTextElement);
  }
}

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
}

const toggleButtonState = (submitButton, invalidSubmitButtonClass, inputList) => {
  disableButton(submitButton, invalidSubmitButtonClass);
  if (hasInvalidInput(inputList)) {
    enableButton(submitButton, invalidSubmitButtonClass);
  } else {
    disableButton(submitButton, invalidSubmitButtonClass);
  }
}

const setEventListeners = (form, inputList, {
  errorClassTemplate,
  activeErrorClass,
  invalidSubmitButtonClass
}, submitButton) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input, errorClassTemplate, activeErrorClass);
      toggleButtonState(submitButton, invalidSubmitButtonClass, inputList);
    });
  });
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...config}) => {

  const formList = Array.from(document.querySelectorAll(config.formSelector));
  const inputList = Array.from(document.querySelectorAll(`${formSelector} ${inputSelector}`));
  const submitButton = Array.from(document.querySelectorAll(submitButtonSelector));

  setEventListeners(formList, inputList, config, submitButton);
}

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input_error_type_',
  activeErrorClass: '.popup__input_error',
  submitButtonSelector: '.popup__submit-button',
  invalidSubmitButtonClass: '.popup__submit-button_inactive'
});

const clearInputError = (formElement, config) => {
  const formInputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  formInputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, config);
  })
}

//  formElement.addEventListener('reset', () => {
//   disableButton(submitButton, invalidSubmitButtonClass);
// });
//проходки по массиву сделать, в момент открытия и закрытия попапа надо кнопку добавления блокировать/разблокировать
