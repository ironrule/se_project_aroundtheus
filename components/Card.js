export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this.name = data.name;
    this.link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  renderCard() {
    this.cardElement = this._getTemplate();
    this.cardElement.querySelector(".card__title").textContent = this.name;
    this.cardImageElement = this.cardElement.querySelector(".card__image");
    this.likeButton = this.cardElement.querySelector(".card__like-button");
    this.deleteButton = this.cardElement.querySelector(".card__delete-button");
    this.cardImageElement.src = this.link;
    this.cardImageElement.alt = this.name;
    this._setEventListeners();
    return this.cardElement;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);
  }

  _setEventListeners() {
    this.cardImageElement.addEventListener("click", () => {
      this._handleImageClick(this);
    });
    this.likeButton.addEventListener("click", this._handleLikeButton);
    this.deleteButton.addEventListener("click", this._handleDeleteButton);
  }

  _handleDeleteButton = () => {
    this.cardElement.remove();
    this.cardElement = null;
  };

  _handleLikeButton = () => {
    this.likeButton.classList.toggle("card__like-button_active");
  };
}
