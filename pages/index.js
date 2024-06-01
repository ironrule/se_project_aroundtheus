/**============================================
 *          Import Classes and Objects
 *=============================================**/
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards, config } from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
/**============================================
 * Profile and profile modal selector variables
 *=============================================**/
const openProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector("#modal__input-name");
const profileDescription = document.querySelector("#modal__input-description");
const profilePopup = document.querySelector("#modal__profile");
const profileForm = document.forms["profile-form"];
/**============================================
 *       Card template selector variables
 *=============================================**/
const cardSelector = "#card-template";
const cardContainer = document.querySelector(".card__container");
const openCardButton = document.querySelector(".profile__add-button");
const cardForm = document.forms["card-form"];
const cardPopup = document.querySelector("#modal__add-card");
/**============================================
 *            Class Instantiations
 *=============================================**/
const userInfo = new UserInfo({
  name: ".profile__name",
  description: ".profile__description",
});

const profilePopupForm = new PopupWithForm(
  "#modal__profile",
  handleProfileSubmit
);
const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  cardContainer
);
const cardPopupForm = new PopupWithForm("#modal__add-card", handleCardSubmit);
const popupWithImage = new PopupWithImage("#modal__preview-wrapper");
const cardFormValidator = new FormValidator(config, cardForm);
const profileFormValidator = new FormValidator(config, profileForm);
/**============================================
 *      Validation and Card Class Calls
 *=============================================**/
cardFormValidator.enableValidation(config, cardPopup);
profileFormValidator.enableValidation(config, profilePopup);
cardSection.renderItems();
/**============================================
 *               Functions
 *=============================================**/
function renderCard(item, method = "append") {
  const card = new Card(item, cardSelector, handleImageClick);
  const cardElement = card.renderCard();
  cardSection.addItem(cardElement, method);
}
function handleImageClick(data) {
  popupWithImage.open(data);
}
function handleProfileSubmit(userData) {
  userInfo.setUserInfo({
    name: userData.title,
    description: userData.description,
  });
}
function handleCardSubmit(data) {
  const cardElement = { name: data.title, link: data.url };
  const card = new Card(cardElement, cardSelector, handleImageClick);
  cardSection.addItem(card.renderCard(), "prepend");
}
/**============================================
 *               Event Listeners
 *=============================================**/
openProfileButton.addEventListener("click", function () {
  const userData = userInfo.getUserInfo();
  profileName.value = userData.name;
  profileDescription.value = userData.description;
  profileFormValidator.handleFormValidationReset();
  profilePopupForm.open();
});
openCardButton.addEventListener("click", () => {
  cardFormValidator.handleFormValidationReset();
  cardPopupForm.open();
});
popupWithImage.setEventListeners();
profilePopupForm.setEventListeners();
cardPopupForm.setEventListeners();
