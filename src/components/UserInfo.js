
export default class UserInfo {
  constructor( {nameSelector, occupationSelector} ) {
    this._popupNameElement = document.querySelector(nameSelector);
    this._popupOccupationElement = document.querySelector(occupationSelector);
  }

  getUserInfo() {
    return {
      name: this._popupNameElement.textContent,
      occupation: this._popupOccupationElement.textContent,
    };
  }

  setUserInfo(name, occupation) {
    this._popupNameElement.textContent = name;
    this._popupOccupationElement.textContent = occupation;
  }
}

