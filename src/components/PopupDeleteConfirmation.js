import Popup from '../components/Popup.js';

export default class PopupDeleteConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__submit-button');
  }

  setConfirmButtonClick(newConfirmButtonHandler) {
    this._handleConfirmButtonClick = newConfirmButtonHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleConfirmButtonClick();
    })
  }
}
