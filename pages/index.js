/**============================================
 *               Import Module Data
 *=============================================**/
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
/**============================================
 *               Initial Card Array
 *=============================================**/
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/**============================================
 * Profile and profile modal selector variables
 *=============================================**/
const openProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector("#modal__input-name");
const inputDescription = document.querySelector("#modal__input-description");
const profileModal = document.querySelector("#modal__profile");
const profileForm = document.forms["profile-form"];
/**============================================
 *           Card template variables
 *=============================================**/
const cardSelector = "#card-template";
const cardContainer = document.querySelector(".card__container");
const openCardButton = document.querySelector(".profile__add-button");
const cardForm = document.forms["card-form"];
const cardPlaceName = document.querySelector("#modal__input-place");
const cardPlaceURL = document.querySelector("#modal__input-url");
const modalCard = document.querySelector("#modal__add-card");
/**============================================
 *          Image preview variables
 *=============================================**/
const previewImageModal = document.querySelector("#modal__preview-wrapper");
const previewImage = document.querySelector(".modal__preview-image");
const previewImageCaption = document.querySelector(".modal__preview-caption");
/**============================================
 *          Modals Selector for Loops
 *=============================================**/
const modals = document.querySelectorAll(".modal");

/**============================================
 *    FormValidator Config Object and Call
 *=============================================**/
const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
const cardFormValidator = new FormValidator(config, cardForm);
const profileFormValidator = new FormValidator(config, profileForm);
cardFormValidator.enableValidation(config, modalCard);
profileFormValidator.enableValidation(config, profileModal);

/**============================================
 *           Card Creation Functions
 *=============================================**/
// Card creation loop for initial card array
initialCards.forEach((item) => {
  renderCard(item, "append");
});
// Card creation loop for all cards
function renderCard(item, method = "append") {
  const card = new Card(item, cardSelector, handleImageClick);
  const cardElement = card.renderCard();
  cardContainer[method](cardElement);
}

/**============================================
 *               Functions
 *=============================================**/
function handleImageClick(e) {
  openModal(previewImageModal);
  previewImage.src = e.link;
  previewImage.alt = e.name;
  previewImageCaption.textContent = e.name;
}

function openCardModal() {
  openModal(modalCard);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const cardPlace = { name: cardPlaceName.value, link: cardPlaceURL.value };
  renderCard(cardPlace, "prepend");
  cardForm.reset();
  cardFormValidator.handleFormValidationReset();
  closeModal(modalCard);
}

// Profile editing functions
function openProfileModal() {
  const errorMessageEl = document.querySelectorAll(".modal__profile-error");
  errorMessageEl.forEach((errorMessage) => {
    errorMessage.textContent = "";
  });
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openModal(profileModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  profileFormValidator.handleFormValidationReset(config, profileModal);
  closeModal(profileModal);
}

/**============================================
 *  Popup Open and Close Universal Functions
 *=============================================**/

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

const handleEscape = (e) => {
  if (e.key === "Escape") {
    modals.forEach(closeModal);
  }
};

/**============================================
 *               Event Listeners
 *=============================================**/
openProfileButton.addEventListener("click", openProfileModal);
profileForm.addEventListener("submit", handleProfileFormSubmit);
openCardButton.addEventListener("click", openCardModal);
cardForm.addEventListener("submit", handleCardSubmit);

/**============================================
 * Modals listeners for closing modals by Mouse
 *=============================================**/
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (e) => {
    if (
      e.target.classList.contains("modal_opened") ||
      e.target.classList.contains("modal__close")
    ) {
      closeModal(modal);
    }
  });
});
