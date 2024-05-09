// Initial card array
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

// Profile and profile modal selector variables
const openProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector("#modal__input-name");
const inputDescription = document.querySelector("#modal__input-description");
const profileModal = document.querySelector("#modal__profile");
const profileModalForm = profileModal.querySelector(".modal__form");
const profileModalCloseButton = profileModal.querySelector(
  "#modal__profile-close"
);
// Card template variables
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardContainer = document.querySelector(".card__container");
// Add new card modal variables
const openCardButton = document.querySelector(".profile__add-button");
const closeCardButton = document.querySelector("#modal__add-close");
const modalCardForm = document.querySelector("#modal__card-form");
const cardPlaceName = document.querySelector("#modal__input-place");
const cardPlaceURL = document.querySelector("#modal__input-url");
const modalCard = document.querySelector("#modal__add-card");
// Image preview variables
const previewImageModal = document.querySelector("#modal__preview-wrapper");
const previewImage = document.querySelector(".modal__preview-image");
const previewImageClose = document.querySelector("#modal__preview-close");
const previewImageCaption = document.querySelector(".modal__preview-caption");
// Modals Selector
const modals = document.querySelectorAll(".modal");

// Card creation loop for initial card array
initialCards.forEach((item) => {
  const createCard = createCardElement(item);
  cardContainer.append(createCard);
});

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
  const cardElement = createCardElement(cardPlace);
  cardContainer.prepend(cardElement);
  modalCardForm.reset();
  closeModal(modalCard);
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
  closeModal(profileModal);
}

// Universal popup open and close
function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

const handleEscape = () => {
  if (event.key === "Escape") {
    console.log(event.key);
    modals.forEach((modal) => {
      closeModal(modal);
    });
  }
};

// Event Listeners
openProfileButton.addEventListener("click", openProfileModal);
profileModalCloseButton.addEventListener("mousedown", function () {
  closeModal(profileModal);
});
profileModalForm.addEventListener("submit", handleProfileFormSubmit);
openCardButton.addEventListener("click", function () {
  openModal(modalCard);
});
closeCardButton.addEventListener("click", function () {
  closeModal(modalCard);
});
modalCardForm.addEventListener("submit", handleCardSubmit);
previewImageClose.addEventListener("click", function () {
  closeModal(previewImageModal);
});

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("modal_opened")) {
      closeModal(modal);
    }
  });
});
