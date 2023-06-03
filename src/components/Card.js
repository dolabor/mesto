export default class Card {
  constructor(data, cardTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.cardId;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  };

  _getTemplate() {
    this._cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.element')
      .cloneNode(true)

    return this._cardTemplate;
  }

  setLikes(likes) {
    this._likes = likes;
    this._likeCountElement.textContent = this._likes.length;

    if (this.isLiked()) {
      this._fillLikeIcon();
    } else {
      this._emptyLikeIcon();
    }
  }

  isLiked() {
    const likedCard = this._likes.find(user => user._id === this._userId)

    return likedCard
  }

  _fillLikeIcon = () => {
    this._likeButton.classList.add('element__like-button_active');
  };

  _emptyLikeIcon = () => {
    this._likeButton.classList.remove('element__like-button_active');
  };

  createCard() {
    this._newCard = this._getTemplate();
    this._likeButton = this._newCard.querySelector('.element__like-button');
    const cardName = this._newCard.querySelector('.element__name');
    cardName.textContent = this._name;
    this._likeCountElement = this._newCard.querySelector('.element__like-count');
    this._cardImage = this._newCard.querySelector('.element__image');
    this._deleteTrashButton = this._newCard.querySelector('.element__delete-button');
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._name);

    this.setLikes(this._likes);

    this._setEventListeners();

    if (this._ownerId !== this._userId) {
      this._deleteTrashButton.style.display = 'none';
    }

    return this._newCard;
  }

  deleteCard = () => {
    this._newCard.remove();
  };

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._cardImage);
    });
  };
};
