import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formInputs = this._popupElement.querySelectorAll(".modal__input");
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._handleSubmit = this._handleSubmit.bind(this);
    this._submitBtn = this._popupElement.querySelector(".modal__button");
    this._submitBtnText = this._submitBtn.textContent;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const formData = this._getInputValues();
    this._handleFormSubmit(formData);
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  resetPopupForm() {
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
