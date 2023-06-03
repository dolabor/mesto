export default class Card {
  constructor(data, cardTemplateSelector, handleCardClick, handleDeleteClick, ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  };

  _getTemplate() {
    this._cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.element')
      .cloneNode(true)

    return this._cardTemplate;
  }

  _setLikes() {
    const likeCountElement = this._newCard.querySelector('.element__like-count');
    likeCountElement.textContent = this._likes.length;
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._likeButton = this._newCard.querySelector('.element__like-button');
    const cardName = this._newCard.querySelector('.element__name');
    cardName.textContent = this._name;
    this._cardImage = this._newCard.querySelector('.element__image');
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._name);

    this._setLikes();

    this._setEventListeners();

    return this._newCard;
  }

  deleteCard = () => {
    this._newCard.remove();
    this._newCard = null;
  };

  _handleLikeButton = () => {
    this._likeButton.classList.toggle('element__like-button_active');
  };

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._likeButton.addEventListener('click', this._handleLikeButton);

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._cardImage);
    });
  };
};



