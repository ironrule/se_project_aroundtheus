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
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardContainer = document.querySelector(".card__container");

// Dynamic iterative card creation loop
for (let initialCard of initialCards) {
  getCardElement(initialCard);
}

// Functions
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

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__title");
  cardName.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardContainer.append(cardElement.cloneNode(true));
}

// Event Listeners
openProfileButton.addEventListener("click", openProfileModal);
closeProfileButton.addEventListener("click", toggleProfileModal);
modalForm.addEventListener("submit", handleFormSubmit);
