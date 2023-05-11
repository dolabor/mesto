import {initialCards} from '../utils/InitialCards.js';
import {config} from '../utils/config.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { userName, userOccupation, userNameElement, userOccupationElement,
  editProfileButton, addPlaceButton, editProfilePopup, addPlacePopup,
  editFormElement, addFormElement, editProfilePopupCloseButton,
  addPlacePopupCloseButton, imagePopupCloseButton, cardsContainer,
  imageInput, nameInput, cardTemplate } from '../utils/constants.js';


const editProfileFormValidation = new FormValidator(config, editFormElement);
const addPlaceFormValidation = new FormValidator(config, addFormElement);

// Экземпляр класса FormValidator для каждой формы //
editProfileFormValidation.enableValidation();
addPlaceFormValidation.enableValidation();

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

const imagePopup = new PopupWithImage('#enlarged-image');
imagePopup.setEventListeners();

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



