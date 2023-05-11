import { popupCaptureElement, popupEnlargedImage } from '../utils/constants.js';
import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCaptureElement = popupCaptureElement;
    this._popupEnlargedImage = popupEnlargedImage;
  }

  openPopup(data) {
    this._popupEnlargedImage.src = data.link;
    this._popupEnlargedImage.alt = data.name;
    this._popupCaptureElement.textContent = data.name;
    super.openPopup();
  }
}

