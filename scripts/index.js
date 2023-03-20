// Собираем HTML элементы страницы в переменные //

// * редактирование профиля пользователя* //
const userName = document.getElementById('name'); // поиск в input popup
const userOccupation = document.getElementById('occupation');

const userNameElement = document.getElementById('user-name'); // поиск полей, куда нужно вписать информацию пользователя
userNameElement.textContent = userName.getAttribute('value');
const userOccupationElement = document.getElementById('user-occupation');
userOccupationElement.textContent = userOccupation.getAttribute('value');

const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');

const editProfilePopup = document.getElementById('edit-profile-form');
const addPlacePopup = document.querySelector('#add-place-form');
const imagePopup = document.querySelector('#enlarged-image');

const editFormElement = document.querySelector('#edit-profile-form .popup__container');
const addFormElement = document.querySelector('#add-place-form .popup__container');

// *кнопки закрытия-открытия popup* //
const editProfilePopupCloseButton = document.querySelector('#edit-profile-form .popup__close-button');
const addPlacePopupCloseButton = document.querySelector('#add-place-form .popup__close-button');
const imagePopupCloseButton = document.querySelector('#enlarged-image .popup__close-button');

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

const cardsContainer = document.querySelector('.destinations');

// *добавление новой карточки через форму* //
const imageInput = document.getElementById('image-ref');
const nameInput = document.getElementById('title');

// Функции открытия-закрытия popup //
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// Функция формы отправки данных о пользователе //
function handleFormSubmit(evt) {
  evt.preventDefault(); //
  userNameElement.textContent = userName.value;
  userOccupationElement.textContent = userOccupation.value;
  editFormElement.reset();
  closePopup(editProfilePopup);
}

// Функция создания новой карточки //
function createCard(newName, newLink) {
  const newCard = document.getElementById('element-template').content.cloneNode(true);
  const cardName = newCard.querySelector('.element__name');
  cardName.textContent = newName;
  const cardImage = newCard.querySelector('.element__image');
  cardImage.setAttribute('src', newLink);
  cardImage.setAttribute('alt', `Фотография`);

  cardImage.addEventListener('click', function () {
    const popupEnlargedImage = document.querySelector('.popup__enlarged-photo');
    popupEnlargedImage.setAttribute('src', newLink);
    openPopup(imagePopup);
  })

  const deleteButton = newCard.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  newCard.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  })
  return newCard;
}

// Функция удаления карточки
function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const card = button.closest('.element');
  card.remove();
}

//Функция отправки формы о местах //
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const addedCard = createCard(nameInput.value, imageInput.value);
  addFormElement.reset();
  closePopup(addPlacePopup);
  cardsContainer.prepend(addedCard);
}

initialCards.forEach(function (element) {
  cardsContainer.append(createCard(element.name, element.link))
})

// Назначения обработчиков //

editProfileButton.addEventListener('click', function () {
  openPopup(editProfilePopup);
});

editProfilePopupCloseButton.addEventListener('click', function () {
  closePopup(editProfilePopup);
});

addPlaceButton.addEventListener('click', function () {
  openPopup(addPlacePopup);
});

addPlacePopupCloseButton.addEventListener('click', function () {
  closePopup(addPlacePopup);
});

imagePopupCloseButton.addEventListener('click', function () {
  closePopup(imagePopup);
});

editFormElement.addEventListener('submit', handleFormSubmit);
addFormElement.addEventListener('submit', handleAddFormSubmit);
