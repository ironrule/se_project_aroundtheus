import Popup from "./Popup.js";

export default class PopupDeleteConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._popupButton = this._popupElement.querySelector(".modal__button");
  }

  open(cardID) {
    this._popupButton.textContent = "Yes";
    this.cardID = cardID;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", () => {
      this._popupButton.textContent = "Saving...";
      this._handleFormSubmit(this.cardID);
    });
  }
}
