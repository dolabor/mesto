import {popupCaptureElement, openPopup, popupEnlargedImage, imagePopup} from './utils.js';

export default class Card {
  constructor(data, cardTemplateSelector) {
    this._cardTemplate = document
      .querySelector(cardTemplateSelector)
      .content.querySelector('.element');
    this._name = data.name;
    this._link = data.link;
  };

  createCard(data) {
    this._newCard = this._cardTemplate.cloneNode(true);
    const cardName = this._newCard.querySelector('.element__name');
    cardName.textContent = data.name;
    console.log(cardName.textContent);
    this._cardImage = this._newCard.querySelector('.element__image');
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._name);

    this._setEventListeners();

    return this._newCard;
  }

  _handleDeleteButtonClick = () => {
    this._newCard.remove();
  };

  // Функция popup с увеличенным изображением карточки
  _zoomedPopup = () => {
    popupEnlargedImage.setAttribute('src', this._link);
    popupEnlargedImage.setAttribute('alt', this._name);
    popupCaptureElement.textContent = this._name;
    openPopup(imagePopup);
  }

  _handleLikeButton = () => {
   this._newCard.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector('.element__delete-button');

    deleteButton.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteButtonClick);
    this._cardImage.addEventListener('click', this._zoomedPopup);
    this._newCard.querySelector('.element__like-button').addEventListener('click', this._handleLikeButton);
  };
};




