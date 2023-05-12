export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(`${this._config.inputSelector}`));
    this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
  };

  _showInputError(errorTextElement, validationMessage) {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(this._config.activeErrorClass);
  };

  _hideInputError(errorTextElement) {
    errorTextElement.classList.remove(this._config.activeErrorClass);
  };

  _disableButton(submitButton) {
    submitButton.classList.add(this._config.invalidSubmitButtonClass);
    submitButton.disabled = true;
  };

  _enableButton(submitButton) {
    submitButton.classList.remove(this._config.invalidSubmitButtonClass);
    submitButton.disabled = false;
  };

  _hasFormInvalidInput(inputList) {
    return inputList.some((input) => !input.validity.valid);
  }

  _toggleButtonDisability(submitButton, inputList) {
    if (this._hasFormInvalidInput(inputList)) {
      this._disableButton(submitButton);
    } else {
      this._enableButton(submitButton);
    }
  };

  _checkInputValidity(input) {
    const errorTextElement = document.querySelector(`${this._config.errorClassTemplate}${input.name}`);

    if (!input.validity.valid) {
      this._showInputError(errorTextElement, input.validationMessage);
    } else {
      this._hideInputError(errorTextElement);
    }
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach((input) => {
      input.addEventListener('input', (e) => {
        this._checkInputValidity(input);
        this._toggleButtonDisability(this._submitButton, this._inputList);
      });
    });

    this._form.addEventListener('reset', (e) => {
      this._disableButton(this._submitButton);
    })
  };

  clearInputError() {
    const formInputList = Array.from(this._form.querySelectorAll(`.${this._config.activeErrorClass}`));
    formInputList.forEach((span) => {
      this._hideInputError(span);
    })
  }

  enableValidation() {
    this._setEventListeners();
  };
};
