// Card Array
let initialCards = [
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
let profile = document.querySelector(".profile__edit-button");
let modalClosed = document.querySelector(".modal__close");
let modalSaved = document.querySelector(".modal__button");
let profileName = document.querySelector(".profile__title");
let profileDescription = document.querySelector(".profile__description");
let inputName = document.querySelector(".modal__input_type_name");
let inputDescription = document.querySelector(".modal__input_type_description");
let modal = document.querySelector(".modal");
let cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
let cardElement = cardTemplate.cloneNode(true);
let cardContainer = document.querySelector(".card__container");

// Functions
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  modal.classList.toggle("modal_opened");
}

function editProfile() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  modal.classList.toggle("modal_opened");
}

// Dynamic iterative card creation loop
for (let initialCard of initialCards) {
  getCardElement(initialCard);
  cardContainer.append(cardElement.cloneNode(true));

  function getCardElement(data) {
    cardElement.querySelector(".card__title").textContent = initialCard.name;
    cardElement.querySelector(".card__image").src = initialCard.link;
    cardElement.querySelector(".card__image").alt = initialCard.name;
    return cardElement;
  }
}

// Event Listeners
profile.addEventListener("click", editProfile);
modalClosed.addEventListener("click", editProfile);
modal.addEventListener("submit", handleFormSubmit);
