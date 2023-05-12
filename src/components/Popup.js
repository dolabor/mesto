export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._closePopupByClickEscape);
    document.addEventListener('click', this._closePopupByClickOverlay);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._closePopupByClickEscape);
    document.removeEventListener('click', this._closePopupByClickOverlay);
  }

  _closePopupByClickEscape = (evt) => {
    if (evt.key === 'Escape') {
      this.close(this._popup);
    }
  }

  _closePopupByClickOverlay= (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close(evt.target);
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__close-button');
    closeButton.addEventListener('click', () => this.close());
  };
}


