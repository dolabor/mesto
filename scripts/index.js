// Собираем HTML элементы страницы в переменные

const editProfileButton = document.querySelector('.profile__edit-button');

let userName = document.getElementById('name');
let userOccupation = document.getElementById('occupation');

const userNameElement = document.getElementById('user-name');
userNameElement.textContent = userName.getAttribute('value');
const userOccupationElement = document.getElementById('user-occupation');
userOccupationElement.textContent = userOccupation.getAttribute('value');

const editProfilePopupCloseButton = document.querySelector('#edit-profile-form .popup__close-button');
const addPlacePopupCloseButton = document.querySelector('#add-place-form .popup__close-button');

const editFormElement = document.querySelector('#edit-profile-form .popup__container');
const addFormElement = document.querySelector('#add-place-form .popup__container');

// Обработчик открытия popup при нажатии кнопки
const addPlacePopup = document.querySelector('#add-place-form');
const editProfilePopup = document.getElementById('edit-profile-form');

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// Обработчик формы отправки
function handleFormSubmit(evt) {
  evt.preventDefault(); //
  userNameElement.textContent = userName.value;
  userOccupationElement.textContent = userOccupation.value;
}

// Назначение обработчика на событие при нажатии кнопки 'edit profile' на открытие popup
editProfileButton.addEventListener('click', function(){
  openPopup(editProfilePopup);
});
// Назначение обработчика при нажатии кнопки 'close' на закрытие popup
editProfilePopupCloseButton.addEventListener('click', function(){
  closePopup(editProfilePopup);
});
// Назначение обработчика при нажатии кнопки 'submit' на отправку формы
editFormElement.addEventListener('submit', handleFormSubmit);

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

initialCards.forEach(function (element) {
  cardsContainer.append(createCard(element.name, element.link))
})

function createCard(newName, newLink) {
  const newCard = document.getElementById('element-template').content.cloneNode(true);
  const cardName = newCard.querySelector('.element__name');
  cardName.textContent = newName;
  const cardImage = newCard.querySelector('.element__image');
  cardImage.setAttribute('src', newLink);
  cardImage.setAttribute('alt', `Фотография`);

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

// Открытие popup для добавления новых карточек
let addPopup = document.getElementById('add-place-form');
let addPlaceButton = document.querySelector('.profile__add-button');

addPlaceButton.addEventListener('click', function () {
  openPopup(addPlacePopup);
});
addPlacePopupCloseButton.addEventListener('click', function (){
  closePopup(addPlacePopup);
});

// Добавление новой карточки через форму
let imageInput = document.getElementById('image-ref');
let nameInput = document.getElementById('title');

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const addedCard = createCard(nameInput.value, imageInput.value);
  addFormElement.reset();
  closePopup(addPlacePopup);
  cardsContainer.prepend(addedCard);
}

addFormElement.addEventListener('submit', handleAddFormSubmit);

//

