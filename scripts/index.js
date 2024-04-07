let initialCards = [
  {
    locationName: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    locationName: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    locationName: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    locationName: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    locationName: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    locationName: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

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
let cardContainer = document.querySelector("#card__container");

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

for (let initialCard of initialCards) {
  getCardElement(initialCard);
  cardContainer.appendChild(cardElement);

  function getCardElement(data) {
    cardElement.querySelector(".card__title").textContent =
      initialCard.locationName;
    cardElement.querySelector(".card__image").src = initialCard.link;
    cardElement.querySelector(".card__image").alt = initialCard.locationName;
    return cardElement;
  }
}

profile.addEventListener("click", editProfile);
modalClosed.addEventListener("click", editProfile);
modal.addEventListener("submit", handleFormSubmit);
