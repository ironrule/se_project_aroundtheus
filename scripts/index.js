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

const profile = document.querySelector(".profile__edit-button");
const modalClosed = document.querySelector(".modal__close");
const modalSaved = document.querySelector(".modal__button");
const profileName = document.querySelector(".profile__title");
// console.log(profileName.textContent);
const profileDescription = document.querySelector(".profile__description");
// console.log(profileDescription.textContent);
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
}

function editProfile() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  let modal = document.querySelector(".modal");
  modal.classList.toggle("modal_opened");
}

profile.addEventListener("click", editProfile);
modalClosed.addEventListener("click", editProfile);
modalSaved.addEventListener("click", handleFormSubmit(evt));
