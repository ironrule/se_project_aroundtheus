import Popup from "./Popup.js";

export default class PopupDeleteConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    // this._handleSubmit = this._handleSubmit.bind(this);
  }

  open(cardID) {
    this.cardID = cardID;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit(this.cardID);
      super.close();
    });
  }
}
