export default class Card {
  constructor({ data, handleCardClick}, cardTemplateSelector) {
    this._data = data;
    this._cardTemplateSelector = cardTemplateSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  };

  createCard() {
    this._newCard = this._cardTemplateSelector.cloneNode(true);
    const cardName = this._newCard.querySelector('.element__name');
    cardName.textContent = this._name;
    this._cardImage = this._newCard.querySelector('.element__image');
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._name);

    this._setEventListeners();

    return this._newCard;
  }

  _handleDeleteButtonClick = () => {
    this._newCard.remove();
  };

  _handleLikeButton = () => {
   this._newCard.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _handleCardClick = () => {

  }

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector('.element__delete-button');

    deleteButton.addEventListener('click', this._handleDeleteButtonClick);
    this._newCard.querySelector('.element__like-button').addEventListener('click', this._handleLikeButton);
  };
};




