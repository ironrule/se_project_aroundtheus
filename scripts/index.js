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
 *               Variables
 *=============================================**/
// Profile and profile modal selector variables
const openProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector("#modal__input-name");
const inputDescription = document.querySelector("#modal__input-description");
const profileModal = document.querySelector("#modal__profile");
const profileForm = document.forms["profile-form"];
// Card template variables
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardContainer = document.querySelector(".card__container");
// Add new card modal variables
const openCardButton = document.querySelector(".profile__add-button");
const cardForm = document.forms["card-form"];
const cardPlaceName = document.querySelector("#modal__input-place");
const cardPlaceURL = document.querySelector("#modal__input-url");
const modalCard = document.querySelector("#modal__add-card");
// Image preview variables
const previewImageModal = document.querySelector("#modal__preview-wrapper");
const previewImage = document.querySelector(".modal__preview-image");
const previewImageCaption = document.querySelector(".modal__preview-caption");
// Modals Selector
const modals = document.querySelectorAll(".modal");

/**============================================
 *               Card Creation Loop
 *=============================================**/
// Card creation loop for initial card array
initialCards.forEach((item) => {
  renderCard(item, "append");
});

/**============================================
 *               Functions
 *=============================================**/
// Card creation functions for user-added content
function createCardElement(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardName.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardImage.addEventListener("click", () => {
    openModal(previewImageModal);
    previewImage.src = cardImage.src;
    previewImage.alt = cardImage.alt;
    previewImageCaption.textContent = cardImage.alt;
  });
  return cardElement;
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const cardPlace = { name: cardPlaceName.value, link: cardPlaceURL.value };
  renderCard(cardPlace, "prepend");
  cardForm.reset();
  handleSubmitInactive();
  closeModal(modalCard);
}

function handleSubmitInactive() {
  const submitButtons = document.querySelectorAll(".modal__button");
  submitButtons.forEach((submitButton) => {
    submitButton.classList.add("modal__button_disabled");
    submitButton.disabled = true;
  });
}

function renderCard(item, method = "append") {
  const cardElement = createCardElement(item);
  cardContainer[method](cardElement);
  return;
}

// Profile editing functions
function openProfileModal() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openModal(profileModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  handleSubmitInactive();
  closeModal(profileModal);
}

/**============================================
 *        Popup Open and Close Functions
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
openCardButton.addEventListener("click", function () {
  openModal(modalCard);
});
cardForm.addEventListener("submit", handleCardSubmit);

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
