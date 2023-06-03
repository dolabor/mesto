import Popup from '../components/Popup.js';

export default class PopupDeleteConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__submit-button');
  }

  changeCardSubmit(newHandleCardSubmit) {
    this._handleCardSubmit = newHandleCardSubmit;
  }

  close() {
    super.close();
    this._form.reset();
  }

  _handleConfirmButtonClick = () => {
    if (typeof this._confirmCallback === 'function') {
      this._confirmCallback();
    }
  }

  setEventListeners() {
    this._confirmButton.addEventListener('click', this._handleConfirmButtonClick);
  }
}
