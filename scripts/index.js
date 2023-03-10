// let likeButton = document.querySelector('.element__like-button');
//
// likeButton.addEventListener('click', function () {
//   likeButton.classList.add('element__like-button_active');
// })
// console.log(likeButton.classList);


let editPopup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');


let userName = 'Жак-Ив Кусто';
let userOccupation = 'Исследователь океана';
let userNameElement = document.querySelector('#user-name');
userNameElement.textContent = userName;
let userOccupationElement = document.querySelector('#user-occupation');
userOccupationElement.textContent = userOccupation;

let userNameInput = document.querySelector('.popup__name');
let userOccupationInput = document.querySelector('.popup__occupation');

editProfileButton.addEventListener('click', function openPopup() {
  editPopup.classList.add("popup_opened");
  console.log(editPopup.classList);

  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
});

let popupCloseButton = document.querySelector('.popup__close-button');
popupCloseButton.addEventListener('click', function closePopup() {
  editPopup.classList.remove("popup_opened");
  console.log(editPopup.classList);
})

// Находим форму в DOM
let formElement = document.querySelector('.popup__user-info');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__occupation');

function handleFormSubmit(evt) {
  evt.preventDefault(); //
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);
