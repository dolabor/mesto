export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((data) => {
      const renderedItem = this._renderer(data);
      this.addItem(renderedItem);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
