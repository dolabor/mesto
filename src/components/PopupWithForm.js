import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleCardSubmit) {
    super(popupSelector);
    this._handleCardSubmit = handleCardSubmit;
    this._form = this._popup.querySelector('.popup__container');

    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => {
      if (input.type !== 'submit') {
        inputValues[input.name] = input.value;
      }
    });
    return inputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleCardSubmit(this._getInputValues());
    });
  }
}
