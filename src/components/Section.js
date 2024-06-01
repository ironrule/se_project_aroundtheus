export default class Section {
  constructor({ items, renderer }, cardContainer) {
    this._cardContainer = cardContainer;
    this._items = items;
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item, "append");
    });
  }

  addItem(item, method = "append") {
    this._cardContainer[method](item);
  }
}
