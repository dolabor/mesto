export {popupEnlargedImage, popupCaptureElement, openedPopup, openPopup, closePopup, imagePopup};

const popupEnlargedImage = document.querySelector('.popup__enlarged-photo');
const popupCaptureElement = document.querySelector('#popup-capture');

const imagePopup = document.querySelector('#enlarged-image');
let openedPopup;

function openPopup(popup) {
  openedPopup = popup;
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closingPopupByClickEscape);
  document.addEventListener('click', closingPopupByClickOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closingPopupByClickEscape);
  document.removeEventListener('click', closingPopupByClickOverlay);
}

function closingPopupByClickEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

function closingPopupByClickOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}
