export default class Section {
  constructor({ data, renderer }, formSelector) {
    this._data = data;
    this._container = document.querySelector(formSelector);
    this._renderer = renderer;
  }

  renderItems() {
    this._data.forEach((item) => {
    const renderedItem = this._renderer(item);
    this.addItem(renderedItem);
    });
  }

  addItem(element) {
    const addedCard = this._renderer(element);
    this._container.prepend(addedCard);
  }
}
