// Собираем HTML элементы страницы в переменные
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

let popupCloseButton = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__occupation');

// Обработчик открытия popup при нажатии кнопки 'edit'
function openPopup() {
  editPopup.classList.add("popup_opened");
}
// Обработчик закрытия popup при нажатии кнопки 'close'
function closePopup() {
  editPopup.classList.remove("popup_opened");
}
// Обработчик формы отправки
function handleFormSubmit(evt) {
  evt.preventDefault(); //
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;

  closePopup();
}

// Назначение обработчика на событие при нажатии кнопки 'edit profile' на открытие popup
editProfileButton.addEventListener('click', openPopup);
// Назначение обработчика при нажатии кнопки 'close' на закрытие popup
popupCloseButton.addEventListener('click', closePopup);
//Назначение обработчика при нажатии кнопки 'submit' на отправку формы
formElement.addEventListener('submit', handleFormSubmit);


//Like section
let likeButton = document.querySelector('.element__like-button');

likeButton.addEventListener('click', function () {
  likeButton.classList.add('element__like-button_active');
})
console.log(likeButton.classList);
