export default class Card {
  constructor(, image) {
    this._ = ;
    this._image = image;
  }

  _getTemplate() {
    const newCard = document
      .querySelector('#element-template')
      .content.querySelector('.element')
      .cloneNode(true);

    return newCard;
  }

  _setEventListeners() {

  }
}
