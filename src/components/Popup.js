export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._closePopupByClickEscape);
    document.addEventListener('click', this._closePopupByClickOverlay);
  }

  closePopup() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._closePopupByClickEscape);
    document.removeEventListener('click', this._closePopupByClickOverlay);
  }

  _closePopupByClickEscape(evt) {
    if (evt.key === 'Escape') {
      this.closePopup(this._popup);
    }
  }

  _closePopupByClickOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.closePopup(evt.target);
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', this._closePopupByClickEscape);
    this._closeButton.addEventListener('click', this._closePopupByClickOverlay);
  }
}

