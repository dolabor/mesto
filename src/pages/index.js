import {initialCards} from '../utils/InitialCards.js';
import {config} from '../utils/config.js';
import {imagePopup} from '../utils/utils.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

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
  closePopup(addPlacePopup);
  renderCard(addedCard);
}

function renderCard(data) {
  const renderedCard = new Card(data, '#element-template');
  const newCard = renderedCard.createCard();
  cardsContainer.prepend(newCard);
}

initialCards.reverse().forEach(renderCard);

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

// 8 СПРИНТ

const cardTemplate = document
  .querySelector(cardTemplateSelector)
  .content.querySelector('.element');

this._cardImage.addEventListener('click', this._zoomPopup);

const section = new Section({
    items: [],
    renderer: (element) => {

    }
  },
  '.destinations');

section.renderer(items);
//   const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', (formData) => {
//   // отправить данные формы на сервер и обновить информацию на странице
// });
//
// const popupAddCard = new PopupWithForm('.popup_type_add-card', (formData) => {
//   // отправить данные формы на сервер и добавить новую карточку на страницу
// });

