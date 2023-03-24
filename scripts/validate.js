const showInputError = (errorTextElement, validationMessage, activeErrorClass) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
}

const hideInputError = (errorTextElement, activeErrorClass) => {
  errorTextElement.classList.remove(activeErrorClass);
}

const disableButton = (submitButton, invalidSubmitButtonClass) => {
  submitButton.classList.add(invalidSubmitButtonClass);
  submitButton.disabled = true;
}

const enableButton = (submitButton, invalidSubmitButtonClass) => {
  submitButton.classList.remove(invalidSubmitButtonClass);
  submitButton.disabled = false;
}

const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
  const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`)
  if (!input.validity.valid) {
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  } else {
    hideInputError(errorTextElement, activeErrorClass);
  }
}

const hasFormInvalidInput = (inputList) => {
  return inputList.some((input) => !input.validity.valid);
}

const toggleButtonDisability = (submitButton, invalidSubmitButtonClass, inputList) => {
  if (hasFormInvalidInput(inputList)) {
    disableButton(submitButton, invalidSubmitButtonClass);
  } else {
    enableButton(submitButton, invalidSubmitButtonClass);
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
      toggleButtonDisability(submitButton, invalidSubmitButtonClass, inputList);
    });
  });
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...config}) => {

  const form = document.querySelector(formSelector);
  const inputList = Array.from(document.querySelectorAll(`${inputSelector}`));
  const submitButton = document.querySelector(submitButtonSelector);

  setEventListeners(form, inputList, config, submitButton);
}

enableValidation(editFormConfig);
enableValidation(addFormConfig);

function clearInputError(formSelector, config) {
  const formInputList = Array.from(formSelector.querySelectorAll(`.${config.activeErrorClass}`));
  formInputList.forEach((span) => {
    hideInputError(span, config.activeErrorClass);
  })
}
