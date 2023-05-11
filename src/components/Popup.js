const editProfilePopupCloseButton = document.querySelector('#edit-profile-form .popup__close-button');
const addPlacePopupCloseButton = document.querySelector('#add-place-form .popup__close-button');

const editProfilePopup = document.querySelector('#edit-profile-form');
const addPlacePopup = document.querySelector('#add-place-form');

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._closePopupByClickEscape);
    document.addEventListener('click', this._closePopupByClickOverlay);
  }

  closePopup(popup) {
    popup.classList.remove("popup_opened");
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
    this._closeButton.addEventListener('click', () => {
      this.closePopup(this._popup);
    });

    this.editProfilePopupCloseButton.addEventListener('click', function () {
      this.closePopup(this._popup);
    });

    addPlacePopupCloseButton.addEventListener('click', function () {
      this.closePopup(this._popup);
    });
  }
}

