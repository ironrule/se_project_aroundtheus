// Card Array
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

// Selector variables
const openProfileButton = document.querySelector(".profile__edit-button");
const closeProfileButton = document.querySelector(".modal__close");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector("#modal__input-name");
const inputDescription = document.querySelector("#modal__input-description");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const cardTemplate = document.querySelector("#card-template").content;
const cardContainer = document.querySelector(".card__container");
const openCardButton = document.querySelector(".profile__add-button");
const closeCardButton = document.querySelector(".modal__add-close");
const modalCardForm = document.querySelector(".modal__card-form");
const cardPlaceName = document.querySelector("#modal__input-place");
const cardPlaceURL = document.querySelector("#modal__input-url");
const modalCard = document.querySelector(".modal__card-form");

// Dynamic iterative card creation loop
initialCards.forEach((item) => {
  getCardElement(item);
});

// Functions
function getCardElement(data) {
  const cardElement = createCard(data);
  cardContainer.append(cardElement);
}

function createCard(item) {
  const cardClone = cardTemplate.cloneNode(true);
  const cardImage = cardClone.querySelector(".card__image");
  const cardName = cardClone.querySelector(".card__title");
  const likeButton = cardClone.querySelector(".card__like-button");
  const trashButton = cardClone.querySelector(".card__trash-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  trashButton.addEventListener("click", () => {
    cardContainer.remove(cardElement);
  });
  cardName.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  return cardClone;
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const cardPlace = { name: cardPlaceName.value, link: cardPlaceURL.value };
  const cardElement = createCard(cardPlace);
  cardContainer.prepend(cardElement);
  cardPlaceName.value = "";
  cardPlaceURL.value = "";
  toggleCardModal();
}

function openProfileModal() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  toggleProfileModal();
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  toggleProfileModal();
}

function toggleProfileModal() {
  modal.classList.toggle("modal_opened");
}

function toggleCardModal() {
  modalCard.classList.toggle("modal_opened");
}

// Event Listeners
openProfileButton.addEventListener("click", openProfileModal);
closeProfileButton.addEventListener("click", toggleProfileModal);
modalForm.addEventListener("submit", handleFormSubmit);
openCardButton.addEventListener("click", toggleCardModal);
closeCardButton.addEventListener("click", toggleCardModal);
modalCardForm.addEventListener("submit", handleCardSubmit);
