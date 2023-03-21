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

// Функции открытия-закрытия popup //
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// Функция формы отправки данных о пользователе //
function handleFormEditProfileSubmit(evt) {
  evt.preventDefault(); //
  userNameElement.textContent = userName.value;
  userOccupationElement.textContent = userOccupation.value;
  editFormElement.reset();
  closePopup(editProfilePopup);
}

//Функция отправки формы о местах //
function handleFormAddPlacesSubmit(evt) {
  evt.preventDefault();
  const addedCard = createCard(nameInput.value, imageInput.value);
  addFormElement.reset();
  closePopup(addPlacePopup);
  cardsContainer.prepend(addedCard);
}

// Функция создания новой карточки //
function createCard(element) {
  const newCard = document.querySelector('#element-template').content.querySelector('.element').cloneNode(true);
  const cardName = newCard.querySelector('.element__name');
  cardName.textContent = element.name;
  const cardImage = newCard.querySelector('.element__image');
  cardImage.setAttribute('src', element.link);
  cardImage.setAttribute('alt', element.name);

  cardsContainer.append(newCard);

  // Функция popup с увеличенным изображением карточки
  function zoomedPopup() {
    const popupEnlargedImage = document.querySelector('.popup__enlarged-photo');
    popupEnlargedImage.setAttribute('src', element.link);
    popupEnlargedImage.setAttribute('alt', element.name);
    const popupCaptureElement = document.querySelector('#popup-capture');
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

// Функция удаления карточки
function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const card = button.closest('.element');
  card.remove();
}

initialCards.forEach(createCard);

// Назначения обработчиков //
editProfileButton.addEventListener('click', function () {
  editFormElement.reset();
  userName.value = document.querySelector('#user-name').textContent;
  userOccupation.value = document.querySelector('#user-occupation').textContent;
  openPopup(editProfilePopup);
});

editProfilePopupCloseButton.addEventListener('click', function () {
  editFormElement.reset();
  closePopup(editProfilePopup);
});

addPlaceButton.addEventListener('click', function () {
  addFormElement.reset();
  openPopup(addPlacePopup);
});

addPlacePopupCloseButton.addEventListener('click', function () {
  closePopup(addPlacePopup);
});

imagePopupCloseButton.addEventListener('click', function () {
  closePopup(imagePopup);
});

editFormElement.addEventListener('submit', handleFormEditProfileSubmit);
addFormElement.addEventListener('submit', handleFormAddPlacesSubmit);

