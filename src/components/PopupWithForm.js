import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    const inputs = Array.from(this._form.elements);
    const values = {};
    inputs.forEach(input => {
      if (input.type !== 'submit') {
        values[input.name] = input.value;
      }
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }

  closePopup(popup) {
    super.closePopup(popup);
    this._form.reset();
  }
}

