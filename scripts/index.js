// Собираем HTML элементы страницы в переменные
let editPopup = document.getElementById('edit-profile-form');
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

//6 cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const destinations = document.querySelector('.destinations')

function createCard(card) {
  const newCard = document.getElementById('element-template').content.cloneNode(true);
  const cardImage = newCard.querySelector('.element__image');
  cardImage.setAttribute('src', card.link);

  const cardName = newCard.querySelector('.element__name');
  cardName.textContent = card.name;

  const deleteButton = newCard.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);
  destinations.append(newCard);
}

initialCards.forEach(createCard);

function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const card = button.closest('.element');
  card.remove();
}


// //like section
// let likeButtons = document.querySelectorAll('.element__like-button');
//
// likeButtons.forEach(function (item) {
//   item.addEventListener('click', function (event) {
//     item.classList.toggle('element__like-button_active');
//   })
// });

// let addPopup = document.getElementById('add-place-form');
// let addPlaceButton = document.querySelector('.profile__add-button');
