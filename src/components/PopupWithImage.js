import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCaptureElement =  this._popup.querySelector('#popup-capture');
    this._popupEnlargedImage = this._popup.querySelector('.popup__enlarged-photo');
  }

  open(data) {
    this._popupEnlargedImage.src = data.link;
    this._popupEnlargedImage.alt = data.name;
    this._popupCaptureElement.textContent = data.name;
    super.open();
  }
}

