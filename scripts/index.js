// import { Card } from './Card.js';
import FormValidator from './FormValidator.js';

// Собираем HTML элементы страницы в переменные //

// * редактирование профиля пользователя* //
const userName = document.querySelector('#name'); // поиск в input popup
const userOccupation = document.querySelector('#occupation');

const userNameElement = document.querySelector('#user-name'); // поиск полей, куда нужно вписать информацию пользователя
userNameElement.textContent = userName.getAttribute('value');
const userOccupationElement = document.querySelector('#user-occupation');
userOccupationElement.textContent = userOccupation.getAttribute('value');

const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');

const editProfilePopup = document.querySelector('#edit-profile-form');
const addPlacePopup = document.querySelector('#add-place-form');
const imagePopup = document.querySelector('#enlarged-image');

// Формы для валидации//
const editFormElement = document.querySelector('#edit-profile-form .popup__container');
const addFormElement = document.querySelector('#add-place-form .popup__container');

const editProfileFormValidation = new FormValidator(config, editFormElement);
const addPlaceFormValidation = new FormValidator(config, addFormElement);

// Экземпляр класса FormValidator для каждой формы //
editProfileFormValidation.enableValidation();
addPlaceFormValidation.enableValidation();

// *кнопки закрытия-открытия popup* //
const editProfilePopupCloseButton = document.querySelector('#edit-profile-form .popup__close-button');
const addPlacePopupCloseButton = document.querySelector('#add-place-form .popup__close-button');
const imagePopupCloseButton = document.querySelector('#enlarged-image .popup__close-button');

const cardsContainer = document.querySelector('.destinations');

// *добавление новой карточки через форму* //
const imageInput = document.querySelector('#image-ref');
const nameInput = document.querySelector('#title');

const popupEnlargedImage = document.querySelector('.popup__enlarged-photo');
const popupCaptureElement = document.querySelector('#popup-capture')

let openedPopup;

// Функции открытия-закрытия popup //
function openPopup(popup) {
  openedPopup = popup;
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closingPopupByClickEscape);
  document.addEventListener('click', closingPopupByClickOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closingPopupByClickEscape);
  document.removeEventListener('click', closingPopupByClickOverlay);
}

function closingPopupByClickEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

function closingPopupByClickOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

// Функция формы отправки данных о пользователе //
function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();
  userNameElement.textContent = userName.value;
  userOccupationElement.textContent = userOccupation.value;
  closePopup(editProfilePopup);
}

//Функция отправки формы о местах //
function handleFormAddPlacesSubmit(evt) {
  evt.preventDefault();
  const addedCard = {
    name: nameInput.value,
    link: imageInput.value
  }
  addFormElement.reset();
  closePopup(addPlacePopup);
  renderCard(addedCard);
}

// Функция создания новой карточки //
function createCard(element) {
  const newCard = document.querySelector('#element-template').content.querySelector('.element').cloneNode(true);
  const cardName = newCard.querySelector('.element__name');
  cardName.textContent = element.name;
  const cardImage = newCard.querySelector('.element__image');
  cardImage.setAttribute('src', element.link);
  cardImage.setAttribute('alt', element.name);

  // Функция popup с увеличенным изображением карточки
  function zoomedPopup() {
    popupEnlargedImage.setAttribute('src', element.link);
    popupEnlargedImage.setAttribute('alt', element.name);
    popupCaptureElement.textContent = element.name;
    openPopup(imagePopup);
  }

  cardImage.addEventListener('click', zoomedPopup);

  const deleteButton = newCard.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  newCard.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  })

  return newCard;
}

function renderCard(element) {
  const renderedCard = createCard(element);
  cardsContainer.prepend(renderedCard);
}

// Функция удаления карточки
function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const card = button.closest('.element');
  card.remove();
}

initialCards.reverse();
initialCards.forEach(renderCard);

editProfileButton.addEventListener('click', function () {
  editFormElement.reset();
  userName.value = userNameElement.textContent;
  userOccupation.value = userOccupationElement.textContent;
  openPopup(editProfilePopup);
  editProfileFormValidation.clearInputError();
});


addPlaceButton.addEventListener('click', function () {
  addFormElement.reset();
  openPopup(addPlacePopup);
  addPlaceFormValidation.clearInputError();
});

editProfilePopupCloseButton.addEventListener('click', function () {
  closePopup(editProfilePopup);
});

addPlacePopupCloseButton.addEventListener('click', function () {
  closePopup(addPlacePopup);
});

imagePopupCloseButton.addEventListener('click', function () {
  closePopup(imagePopup);
});

editFormElement.addEventListener('submit', handleFormEditProfileSubmit);
addFormElement.addEventListener('submit', handleFormAddPlacesSubmit);
