/**============================================
 *          Import CSS for Webpack
 *=============================================**/
import "./index.css";
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
import Api from "../components/Api.js";
/**============================================
 * Profile and profile modal selector variables
 *=============================================**/
const openProfileButton = document.querySelector(".profile__edit-button");
/**============================================
 *       Card template selector variables
 *=============================================**/
const cardSelector = "#card-template";
const cardContainer = document.querySelector(".card__container");
const openCardButton = document.querySelector(".profile__add-button");
/**============================================
 *            Class Instantiations
 *=============================================**/
const userInfo = new UserInfo({
  name: ".profile__name",
  description: ".profile__description",
});
const getApiUserInfo = new Api({
  name: ".profile__name",
  about: ".profile__description",
  avatar: ".profile__image",
});
getApiUserInfo.getUserInfo();
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
/**============================================
 *      Validation and Card Class Calls
 *=============================================**/
cardSection.renderItems();

const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(config);

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
  profilePopupForm.setInputValues(userData);
  formValidators["profile-form"].resetValidation();
  profilePopupForm.open();
});
openCardButton.addEventListener("click", () => {
  formValidators["card-form"].resetValidation();
  cardPopupForm.open();
});
popupWithImage.setEventListeners();
profilePopupForm.setEventListeners();
cardPopupForm.setEventListeners();
