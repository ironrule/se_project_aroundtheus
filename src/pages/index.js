/**============================================
 *          Import CSS for Webpack
 *=============================================**/
import "./index.css";
/**============================================
 *          Import Classes and Objects
 *=============================================**/
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  config,
  apiConfig,
  openProfileButton,
  openAvatarButton,
  cardSelector,
  cardContainer,
  openCardButton,
  cardElement,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDeleteConfirmation from "../components/PopupDeleteConfirmation.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
/**============================================
 *            Class Instantiations
 *=============================================**/
const userInfo = new UserInfo({
  name: ".profile__name",
  description: ".profile__description",
  avatar: ".profile__image",
});
const api = new Api(apiConfig);
const profilePopupForm = new PopupWithForm(
  "#modal__profile",
  handleProfileSubmit
);
const avatarPopupForm = new PopupWithForm("#modal__avatar", handleAvatarSubmit);
const cardSection = new Section({}, cardContainer);
const cardPopupForm = new PopupWithForm("#modal__add-card", handleCardSubmit);
const popupWithImage = new PopupWithImage("#modal__preview-wrapper");
const deleteConfirmation = new PopupDeleteConfirmation(
  "#modal__delete-card",
  deleteConfirmed
);
const card = new Card(
  cardElement,
  cardSelector,
  handleImageClick,
  handleDeleteClick,
  handleLikeClick
);
/**============================================
 *      Validation and Card Class Calls
 *=============================================**/
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    getInitialApiUserInfo(userData);
    handleApiCardInfo(cards);
  })
  .catch(console.error);

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
function handleApiCardInfo(cardData) {
  const cardApiSection = new Section(
    { items: cardData, renderer: renderCard },
    cardContainer
  );
  cardApiSection.renderItems();
}
function renderCard(item, method = "append") {
  const card = new Card(
    item,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  );
  const cardElement = card.renderCard();
  cardSection.addItem(cardElement, method);
}
function handleImageClick(data) {
  popupWithImage.open(data);
}
function handleDeleteClick(cardData) {
  deleteConfirmation.open(cardData);
}
function deleteConfirmed(card) {
  api
    .deleteCard(card.cardID)
    .then(() => {
      card.cardElement.remove();
      card.cardElement = null;
    })
    .then(() => {
      deleteConfirmation.close();
    })
    .catch(console.error);
}
function handleLikeClick(cardObj, cardData, likeAction) {
  if (likeAction === "addLike") {
    api
      .addLike(cardData._id)
      .then(() => {
        card.addLike(cardObj);
      })
      .catch(console.error);
  }
  if (likeAction === "removeLike") {
    api
      .deleteLike(cardData._id)
      .then(() => {
        card.removeLike(cardObj);
      })
      .catch(console.error);
  }
}

function getInitialApiUserInfo(userData) {
  userInfo.setUserInfo({
    name: userData.name,
    description: userData.about,
  });
  userInfo.setUserAvatar(userData.avatar);
}

function handleProfileSubmit(userData) {
  profilePopupForm.renderLoading(true, "Saving...");
  api
    .setUserInfo(userData.title, userData.description)
    .then(() => {
      userInfo.setUserInfo({
        name: userData.title,
        description: userData.description,
      });
    })
    .then(() => {
      profilePopupForm.close();
      profilePopupForm.resetPopupForm();
    })
    .catch(console.error)
    .finally(() => {
      profilePopupForm.renderLoading(false);
    });
}
function handleAvatarSubmit(data) {
  avatarPopupForm.renderLoading(true);
  api
    .setAvatar(data.url)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      avatarPopupForm.close();
      avatarPopupForm.resetPopupForm();
    })
    .catch(console.error)
    .finally(() => {
      avatarPopupForm.renderLoading(false);
    });
}
function handleCardSubmit(data) {
  cardPopupForm.renderLoading(true, "Saving...");
  const cardElement = { name: data.title, link: data.url };
  api
    .addCard(cardElement)
    .then((res) => {
      renderCard(res, "prepend");
    })
    .then(() => {
      cardPopupForm.close();
      cardPopupForm.resetPopupForm();
    })
    .catch(console.error)
    .finally(() => {
      cardPopupForm.renderLoading(false);
    });
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
openAvatarButton.addEventListener("click", () => {
  formValidators["avatar-form"].resetValidation();
  avatarPopupForm.open();
});
popupWithImage.setEventListeners();
profilePopupForm.setEventListeners();
avatarPopupForm.setEventListeners();
cardPopupForm.setEventListeners();
deleteConfirmation.setEventListeners();
