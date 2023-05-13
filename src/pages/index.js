import './index.css';
import {initialCards} from '../utils/InitialCards.js';
import {config} from '../utils/config.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  userName, userOccupation, editProfileButton,
  addPlaceButton, editFormElement, addFormElement, cardsContainer,
} from '../utils/constants.js';

// Экземпляр класса FormValidator для каждой формы //
const editProfileFormValidation = new FormValidator(config, editFormElement);
const addPlaceFormValidation = new FormValidator(config, addFormElement);
editProfileFormValidation.enableValidation();
addPlaceFormValidation.enableValidation();

function renderCard(data) {
  const renderedCard = new Card(data, '#element-template', () => {
    imagePopup.open(data);
  });

  return renderedCard.createCard();
}

const handleCardSubmit = (data) => {
  const addedCard = renderCard({
    name: data.title,
    link: data['image-ref'],
  });
  section.addItem(addedCard);
  popupAddPlace.close();
}

const handleFormEditProfileSubmit = (data) => {
  const {name, occupation} = data;
  userInfo.setUserInfo(name, occupation);
  popupEditProfile.close();
}

const section = new Section({
    items: initialCards,
    renderer: renderCard
  },
  '.destinations');

section.renderItems();

const imagePopup = new PopupWithImage('#enlarged-image');
imagePopup.setEventListeners();
const popupEditProfile = new PopupWithForm('#edit-profile-form', handleFormEditProfileSubmit);
const popupAddPlace = new PopupWithForm('#add-place-form', handleCardSubmit);
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  occupationSelector: '.profile__subtitle'
})

imagePopup.setEventListeners();
popupEditProfile.setEventListeners();
popupAddPlace.setEventListeners();


editProfileButton.addEventListener('click', function () {
  editProfileFormValidation.clearInputError();
  const userData = userInfo.getUserInfo();
  userName.value = userData.name;
  userOccupation.value = userData.occupation;
  popupEditProfile.open();
});

addPlaceButton.addEventListener('click', function () {
  addPlaceFormValidation.clearInputError();
  popupAddPlace.open();
});




