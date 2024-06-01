import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.imagePreview = this._popupElement.querySelector(
      ".modal__preview-image"
    );
    this.imageCaption = this._popupElement.querySelector(
      ".modal__preview-caption"
    );
  }
  open(data) {
    this.imagePreview.src = data.link;
    this.imagePreview.alt = data.title;
    this.imageCaption.textContent = data.title;
    super.open();
  }
}
