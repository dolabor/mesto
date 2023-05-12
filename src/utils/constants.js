export {
  userName, userOccupation, userNameElement, userOccupationElement,
  editProfileButton, addPlaceButton, editProfilePopup, addPlacePopup,
  editFormElement, addFormElement, editProfilePopupCloseButton,
  addPlacePopupCloseButton, imagePopupCloseButton, cardsContainer,
  imageInput, nameInput};

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

// *кнопки закрытия-открытия popup* //
const editProfilePopupCloseButton = document.querySelector('#edit-profile-form .popup__close-button');
const addPlacePopupCloseButton = document.querySelector('#add-place-form .popup__close-button');
const imagePopupCloseButton = document.querySelector('#enlarged-image .popup__close-button');

const cardsContainer = document.querySelector('.destinations');

// *добавление новой карточки через форму* //
const imageInput = document.querySelector('#image-ref');
const nameInput = document.querySelector('#title');


