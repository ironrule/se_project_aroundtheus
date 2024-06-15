/**============================================
 *       FormValidator Config Object
 *=============================================**/
export const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
  formSelector: ".modal__form",
};

export const apiConfig = {
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "7d61f2da-4ddf-40b8-adec-eade6c2db478",
    "Content-Type": "application/json",
  },
};
/**============================================
 * Profile and profile modal selector variables
 *=============================================**/
export const openProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const openAvatarButton = document.querySelector(
  ".profile__overlay-button"
);
/**============================================
 *       Card template selector variables
 *=============================================**/
export const cardSelector = "#card-template";
export const cardContainer = document.querySelector(".card__container");
export const openCardButton = document.querySelector(".profile__add-button");
