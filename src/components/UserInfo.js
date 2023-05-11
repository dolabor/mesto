export default class UserInfo {
  constructor({ popupCaptureElement, popupEnlargedImage }) {
    this._popupCaptureElement = document.querySelector(popupCaptureElement);
    this._popupEnlargedImage = document.querySelector(popupEnlargedImage);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      info: this._infoElement.textContent,
    };
  }

  setUserInfo({ name, info }) {
    this._nameElement.textContent = name;
    this._infoElement.textContent = info;
  }
}

