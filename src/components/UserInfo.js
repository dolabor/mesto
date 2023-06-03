
export default class UserInfo {
  constructor( {nameSelector, occupationSelector, profileAvatarSelector} ) {
    this._popupNameElement = document.querySelector(nameSelector);
    this._popupOccupationElement = document.querySelector(occupationSelector);
    this._avatarElement = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._popupNameElement.textContent,
      occupation: this._popupOccupationElement.textContent,
    };
  }

  setUserInfo(name, occupation, avatar) {
    this._popupNameElement.textContent = name;
    this._popupOccupationElement.textContent = occupation;
    this._avatarElement.src = avatar;
  }
}

