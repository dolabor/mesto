// let likeButton = document.querySelector('.element__like-button');
//
// likeButton.addEventListener('click', function () {
//   likeButton.classList.add('element__like-button_active');
// })
// console.log(likeButton.classList);


let editPopup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');


let userName = document.getElementById('name');
let userOccupation = document.getElementById('occupation');

let userNameElement = document.getElementById('user-name');
userNameElement.textContent = userName.getAttribute('value');
let userOccupationElement = document.getElementById('user-occupation');
userOccupationElement.textContent = userOccupation.getAttribute('value');

let userNameInput = document.querySelector('.popup__name');
let userOccupationInput = document.querySelector('.popup__occupation');

editProfileButton.addEventListener('click', function openPopup() {
  editPopup.classList.add("popup_opened");
});

let popupCloseButton = document.querySelector('.popup__close-button');
popupCloseButton.addEventListener('click', function closePopup() {
  editPopup.classList.remove("popup_opened");
})

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__occupation');

function handleFormSubmit(evt) {
  evt.preventDefault(); //
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;

  editPopup.classList.remove("popup_opened");
}
formElement.addEventListener('submit', handleFormSubmit);
