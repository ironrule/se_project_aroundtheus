export default class Card {
  constructor(
    data,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this.card = data;
    this.name = data.name;
    this.link = data.link;
    this.cardID = data._id;
    this.isLiked = data.isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this.handleLikeClick = handleLikeClick;
  }

  renderCard() {
    this.cardElement = this._getTemplate();
    this.cardElement.querySelector(".card__title").textContent = this.name;
    this.cardImageElement = this.cardElement.querySelector(".card__image");
    this.likeButton = this.cardElement.querySelector(".card__like-button");
    if (this.isLiked) {
      this.likeButton.classList.add("card__like-button_active");
    }
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
    this.deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
  }

  _handleLikeButton = () => {
    if (!this.likeButton.classList.contains("card__like-button_active")) {
      this.handleLikeClick(this, this.card, "addLike");
    } else {
      if (this.likeButton.classList.contains("card__like-button_active")) {
        this.handleLikeClick(this, this.card, "removeLike");
      }
    }
  };

  addLike(cardData) {
    cardData.likeButton.classList.add("card__like-button_active");
  }

  removeLike(cardData) {
    cardData.likeButton.classList.remove("card__like-button_active");
  }
}
