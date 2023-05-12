export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((data) => {
      this._renderer(data, this._container);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
