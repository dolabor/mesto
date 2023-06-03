import './index.css';
import { config } from '../utils/config.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  userName, userOccupation, editProfileButton,
  addPlaceButton, editFormElement, addFormElement,
  editAvatarFormElement, avatarContainer
} from '../utils/constants.js';
import {api} from '../components/Api.js';

const section = new Section({
  items: [],
  renderer: renderCard
}, '.destinations');

const imagePopup = new PopupWithImage('#enlarged-image');
const popupEditProfile = new PopupWithForm('#edit-profile-form', handleFormEditProfileSubmit);
const popupAddPlace = new PopupWithForm('#add-place-form', handleCardSubmit);
const confirmDeletePopup = new PopupWithForm('.popup_confirm-delete');

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  occupationSelector: '.profile__subtitle',
  profileAvatarSelector: '.profile__avatar-image'
});
const editProfileFormValidation = new FormValidator(config, editFormElement);
const addPlaceFormValidation = new FormValidator(config, addFormElement);
const editAvatarFormValidation = new FormValidator(config, editAvatarFormElement);

let userId

api.getProfile()
  .then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
    userId = res._id;
  });

api.getInitialCards()
  .then((cardList) => {
    cardList.forEach(data => {
      const card = renderCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        cardId: data._id,
        userId: userId,
        ownerId: data.owner._id
      });
      section.addItem(card);
      section.renderItems();
    })
  });

const changeAvatarPopup = new PopupWithForm('.popup_change-avatar', (formData) => {
  changeAvatarPopup.renderLoading(true);
  api.editAvatar(formData[`avatar-ref`])
    .then((data) => {
      const {name, about, avatar} = data
      userInfo.setUserInfo(name, about, avatar)
      changeAvatarPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => changeAvatarPopup.renderLoading(false))
})

function renderCard(data) {
  const card = new Card(
    data,
    '#element-template',
    () => {
      imagePopup.open(data);
    },
    (id) => {
      confirmDeletePopup.open();
      confirmDeletePopup.changeCardSubmit(() => {
          api.deleteCard(id)
            .then((res) => {
              card.deleteCard();
              confirmDeletePopup.close();
            })
            .catch((err) => {
              console.log(err);
              confirmDeletePopup.close();
            });
        }
      );
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
            card.setLikes(res.likes)
          })
      } else {
        api.addLike(id)
          .then((res) => {
            card.setLikes(res.likes)
          })
      }
    },
  );

  return card.createCard();
}

function handleCardSubmit(data) {
  popupAddPlace.renderLoading(true);

  api.addNewCard(data.title, data['image-ref'])
    .then((res) => {
      const addedCard = renderCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        cardId: res._id,
        userId: userId,
        ownerId: res.owner._id
      });
      section.addItem(addedCard);
      popupAddPlace.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAddPlace.renderLoading(false))
}

function handleFormEditProfileSubmit(data) {
  const {name, occupation} = data;

  popupEditProfile.renderLoading(true);
  api.editProfile(name, occupation)
    .then((res) => {
      userInfo.setUserInfo(name, occupation, );
      popupEditProfile.close();
    })
    .catch((err) => console.log())
    .finally(() => popupEditProfile.renderLoading(false))
}

editProfileFormValidation.enableValidation();
addPlaceFormValidation.enableValidation();
editAvatarFormValidation.enableValidation();

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

avatarContainer.addEventListener('click', function () {
  editAvatarFormValidation.clearInputError();
  changeAvatarPopup.open();
});

popupEditProfile.setEventListeners();
popupAddPlace.setEventListeners();
imagePopup.setEventListeners();
confirmDeletePopup.setEventListeners();
changeAvatarPopup.setEventListeners();

