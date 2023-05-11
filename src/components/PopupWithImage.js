import { popupCaptureElement, popupEnlargedImage } from '../utils/utils.js';
import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCaptureElement = popupCaptureElement;
    this._popupEnlargedImage = popupEnlargedImage;
  }

    // Функция popup с увеличенным изображением карточки
  _zoomPopup = () => {
    popupEnlargedImage.setAttribute('src', this._link);
    popupEnlargedImage.setAttribute('alt', this._name);
    popupCaptureElement.textContent = this._name;
    openPopup(imagePopup);
  }

  openPopup(data) {
    this._popupEnlargedImage.src = data.link;
    this._popupEnlargedImage.alt = data.name;
    this._popupCaptureElement.textContent = data.name;
    super.openPopup();
  }
}

