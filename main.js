(()=>{"use strict";var t={formSelector:"popup__container",inputSelector:".popup__input",errorClassTemplate:".popup__input-error_type_",activeErrorClass:"popup__input-error_active",submitButtonSelector:".popup__submit-button",invalidSubmitButtonClass:"popup__submit-button_inactive"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function r(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var i=function(){function t(e,n,o,i,u){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_fillLikeIcon",(function(){c._likeButton.classList.add("element__like-button_active")})),r(this,"_emptyLikeIcon",(function(){c._likeButton.classList.remove("element__like-button_active")})),r(this,"deleteCard",(function(){c._newCard.remove()})),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.cardId,this._userId=e.userId,this._ownerId=e.ownerId,this._cardTemplateSelector=n,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=u}var e,o;return e=t,(o=[{key:"_getTemplate",value:function(){return this._cardTemplate=document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0),this._cardTemplate}},{key:"setLikes",value:function(t){this._likes=t,this._likeCountElement.textContent=this._likes.length,this.isLiked()?this._fillLikeIcon():this._emptyLikeIcon()}},{key:"isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"createCard",value:function(){return this._newCard=this._getTemplate(),this._likeButton=this._newCard.querySelector(".element__like-button"),this._newCard.querySelector(".element__name").textContent=this._name,this._likeCountElement=this._newCard.querySelector(".element__like-count"),this._cardImage=this._newCard.querySelector(".element__image"),this._deleteTrashButton=this._newCard.querySelector(".element__delete-button"),this._cardImage.setAttribute("src",this._link),this._cardImage.setAttribute("alt",this._name),this.setLikes(this._likes),this._setEventListeners(),this._ownerId!==this._userId&&(this._deleteTrashButton.style.display="none"),this._newCard}},{key:"_setEventListeners",value:function(){var t=this;this._newCard.querySelector(".element__delete-button").addEventListener("click",(function(){return t._handleDeleteClick(t._id)})),this._likeButton.addEventListener("click",(function(){return t._handleLikeClick(t._id)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._cardImage)}))}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll("".concat(this._config.inputSelector))),this._submitButton=this._form.querySelector(this._config.submitButtonSelector);var o={};this._inputList.forEach((function(t){o[t.name]=document.querySelector("".concat(r._config.errorClassTemplate).concat(t.name))})),this.errorInputObj=o}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){t.textContent=e,t.classList.add(this._config.activeErrorClass)}},{key:"_hideInputError",value:function(t){t.classList.remove(this._config.activeErrorClass)}},{key:"_disableButton",value:function(t){t.classList.add(this._config.invalidSubmitButtonClass),t.disabled=!0}},{key:"_enableButton",value:function(t){t.classList.remove(this._config.invalidSubmitButtonClass),t.disabled=!1}},{key:"_hasFormInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonDisability",value:function(t,e){this._hasFormInvalidInput(e)?this._disableButton(t):this._enableButton(t)}},{key:"_checkInputValidity",value:function(t){var e=this.errorInputObj[t.name];t.validity.valid?this._hideInputError(e):this._showInputError(e,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(n){t._checkInputValidity(e),t._toggleButtonDisability(t._submitButton,t._inputList)}))})),this._form.addEventListener("reset",(function(e){t._disableButton(t._submitButton)}))}},{key:"clearInputError",value:function(){var t=this;this._inputList.forEach((function(e){var n=t.errorInputObj[e.name];t._hideInputError(n)}))}},{key:"enableValidation",value:function(){this._disableButton(this._submitButton),this._setEventListeners()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._container=document.querySelector(n),this._renderer=o}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function d(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var h=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"_closePopupByClickEscape",(function(t){"Escape"===t.key&&n.close(n._popup)})),d(this,"_closePopupByClickOverlay",(function(t){t.target.classList.contains("popup_opened")&&n.close(t.target)})),this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupByClickEscape),document.addEventListener("click",this._closePopupByClickOverlay)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupByClickEscape),document.removeEventListener("click",this._closePopupByClickOverlay)}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return t.close()}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleCardSubmit=e,n._form=n._popup.querySelector(".popup__container"),n._submitButton=n._popup.querySelector(".popup__submit-button"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){"submit"!==e.type&&(t[e.name]=e.value)})),t}},{key:"close",value:function(){_(S(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._submitButtonText}},{key:"setEventListeners",value:function(){var t=this;_(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleCardSubmit(t._getInputValues())}))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupCaptureElement=e._popup.querySelector("#popup-capture"),e._popupEnlargedImage=e._popup.querySelector(".popup__enlarged-photo"),e}return e=u,(n=[{key:"open",value:function(t){this._popupEnlargedImage.src=t.link,this._popupEnlargedImage.alt=t.name,this._popupCaptureElement.textContent=t.name,j(P(u.prototype),"open",this).call(this)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._confirmButton=e._popup.querySelector(".popup__submit-button"),e}return e=u,(n=[{key:"setConfirmButtonClick",value:function(t){this._handleConfirmButtonClick=t}},{key:"setEventListeners",value:function(){var t=this;B(q(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(e){e.preventDefault(),t._handleConfirmButtonClick()}))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var U=function(){function t(e){var n=e.nameSelector,r=e.occupationSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupNameElement=document.querySelector(n),this._popupOccupationElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._popupNameElement.textContent,occupation:this._popupOccupationElement.textContent}}},{key:"setUserInfo",value:function(t,e,n){this._popupNameElement.textContent=t,this._popupOccupationElement.textContent=e,void 0!==n&&this._avatarElement.setAttribute("src",n)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=document.querySelector("#name"),N=document.querySelector("#occupation");document.querySelector("#user-name").textContent=D.getAttribute("value"),document.querySelector("#user-occupation").textContent=N.getAttribute("value");var V=document.querySelector(".profile__edit-button"),J=document.querySelector(".profile__add-button"),F=document.querySelector(".profile__avatar"),H=(document.querySelector(".profile__avatar-image"),document.querySelector("#edit-profile-form .popup__container")),M=document.querySelector("#add-place-form .popup__container"),z=document.querySelector("#popup-change-avatar .popup__container");function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}var K=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=r,this._baseUrl=n}var e,n;return e=t,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"editProfile",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"addNewCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"editAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"16924f85-2145-498e-b02a-b8904d6c73b2","Content-Type":"application/json"}});function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Promise.all([K.getProfile(),K.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];nt.setUserInfo(o.name,o.about,o.avatar),W=o._id,i.reverse(),i.forEach((function(t){var e=ct({name:t.name,link:t.link,likes:t.likes,cardId:t._id,userId:W,ownerId:t.owner._id});X.addItem(e),X.renderItems()}))})).catch((function(t){return console.log(t)}));var W,X=new f({items:[],renderer:ct},".destinations"),Y=new C("#enlarged-image"),Z=new k("#edit-profile-form",(function(t){var e=t.name,n=t.occupation;Z.renderLoading(!0),K.editProfile(e,n).then((function(t){nt.setUserInfo(e,n),Z.close()})).catch((function(t){return console.log()})).finally((function(){return Z.renderLoading(!1)}))})),tt=new k("#add-place-form",(function(t){tt.renderLoading(!0),K.addNewCard(t.title,t["image-ref"]).then((function(t){var e=ct({name:t.name,link:t.link,likes:t.likes,cardId:t._id,userId:W,ownerId:t.owner._id});X.addItem(e),tt.close()})).catch((function(t){return console.log(t)})).finally((function(){return tt.renderLoading(!1)}))})),et=new R(".popup_confirm-delete"),nt=new U({nameSelector:".profile__title",occupationSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar-image"}),rt=new a(t,H),ot=new a(t,M),it=new a(t,z),ut=new k(".popup_change-avatar",(function(t){ut.renderLoading(!0),K.editAvatar(t["avatar-ref"]).then((function(t){var e=t.name,n=t.about,r=t.avatar;nt.setUserInfo(e,n,r),ut.close()})).catch((function(t){return console.log(t)})).finally((function(){return ut.renderLoading(!1)}))}));function ct(t){var e=new i(t,"#element-template",(function(){Y.open(t)}),(function(t){et.open(),et.setConfirmButtonClick((function(){K.deleteCard(t).then((function(t){e.deleteCard(),et.close()})).catch((function(t){console.log(t),et.close()}))}))}),(function(t){e.isLiked()?K.deleteLike(t).then((function(t){e.setLikes(t.likes)})).catch((function(t){return console.log(t)})):K.addLike(t).then((function(t){e.setLikes(t.likes)})).catch((function(t){return console.log(t)}))}));return e.createCard()}rt.enableValidation(),ot.enableValidation(),it.enableValidation(),V.addEventListener("click",(function(){rt.clearInputError();var t=nt.getUserInfo();D.value=t.name,N.value=t.occupation,Z.open()})),J.addEventListener("click",(function(){ot.clearInputError(),tt.open()})),F.addEventListener("click",(function(){it.clearInputError(),ut.open()})),Z.setEventListeners(),tt.setEventListeners(),Y.setEventListeners(),et.setEventListeners(),ut.setEventListeners()})();