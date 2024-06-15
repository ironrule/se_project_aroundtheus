import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formInputs = this._popupElement.querySelectorAll(".modal__input");
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._handleSubmit = this._handleSubmit.bind(this);
    this._popupButton = this._popupElement.querySelector(".modal__button");
  }

  _handleSubmit(evt) {
    this._popupButton.textContent = "Saving...";
    evt.preventDefault();
    const formData = this._getInputValues();
    this._handleFormSubmit(formData);
    this.close();
    this._popupForm.reset();
  }

  _getInputValues() {
    this._inputData = {};
    this._formInputs.forEach((input) => {
      this._inputData[input.name] = input.value;
    });
    return this._inputData;
  }

  setInputValues(data) {
    this._formInputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleSubmit);
  }
}
