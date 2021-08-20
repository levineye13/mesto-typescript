import ApiError from '../utils/ApiError';
import './index.css';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import User from '../components/User';
import apiUser from '../utils/api/ApiUser';
import apiCard from '../utils/api/ApiCard';
import {
  API_BASE_URL,
  API_KEY,
  validationObject,
  containerSelector,
  openEditFormButton,
  openCardFormButton,
  openUpdateFormButton,
  profileAvatarSelector,
  profileTitleSelector,
  profileSubtitleSelector,
  nameField,
  jobField,
  popupAddCardSelector,
  popupConfirmSelector,
  popupImageSelector,
  popupProfileSelector,
  popupUpdateAvatarSelector,
} from './../utils/constants';
import { IUser } from '../utils/types';

// /**
//  * Функция изменения состояния лайка
//  *
//  * @param  {Object} card - объект карточки
//  * @param  {Object} cardMarkup- разметка карточки
//  * @param  {Boolean} likeButtonState - состояние кнопки (поля _isLiked объекта Card)
//  */
// const toggleLikeCard = (card, cardMarkup, likeButtonState) => {
//   if (likeButtonState) {
//     card.removeLike();
//     card.setLikeButtonState(false);
//   } else {
//     card.addLike();
//     card.setLikeButtonState(true);
//   }
//   card.toggleLikeButtonState(cardMarkup);
// };

// /**
//  * Функция для выбора операции добавления/удаления лайка (PUT/DELETE)
//  *
//  * @param  {Object} card - объект карточки
//  * @param  {Object} cardMarkup - разметка карточки
//  * @param  {Boolean} likeButtonState - состояние кнопки (поля _isLiked объекта Card)
//  * @param  {String} id - id карточки
//  * @param  {String} methodHTTP - HTTP PUT/DELETE
//  * @public
//  */
// const requestToggleLikeCard = (
//   card,
//   cardMarkup,
//   likeButtonState,
//   id,
//   methodHTTP
// ) => {
//   api
//     .likeCard(id, methodHTTP)
//     .then(() => toggleLikeCard(card, cardMarkup, likeButtonState))
//     .catch((err) => console.log(err));
// };
// /**
//  * Функция для изменения состояния кнопки в момент ожидания ответа сервера
//  *
//  * @param  {String} popupSelector - селектрор попапа
//  * @param  {Boolean} isLoading - состояние загрузки
//  * @public
//  */
// const renderLoading = (popupSelector, isLoading) => {
//   const button = document
//     .querySelector(popupSelector)
//     .querySelector('.popup__save-button');
//   let buttonText = 'Сохранить';
//   let buttonLoadingText = 'Сохранение...';

//   switch (popupSelector) {
//     case popupConfirmSelector:
//       buttonText = 'Да';
//       buttonLoadingText = 'Удаление...';
//       break;

//     case popupAddCardSelector:
//       buttonText = 'Создать';
//       buttonLoadingText = 'Добавление...';
//       break;
//   }

//   if (isLoading) {
//     button.textContent = buttonLoadingText;
//   } else {
//     button.textContent = buttonText;
//   }
// };

// /**
//  * Функция создания объекта карточки
//  *
//  * @param  {string} name
//  * @param  {string} link
//  * @return {Card}
//  */
// const createCard = (data) => {
//   const card = new Card(
//     {
//       data,
//       handleCardClick: (name, link) => {
//         imagePopup.setEventListeners();
//         imagePopup.open(name, link);
//       },
//       handleLikeClick: (cardElement) => {
//         const likeButtonState = card.getLikeButtonState();
//         if (likeButtonState) {
//           requestToggleLikeCard(
//             card,
//             cardElement,
//             likeButtonState,
//             data._id,
//             'DELETE'
//           );
//         } else {
//           requestToggleLikeCard(
//             card,
//             cardElement,
//             likeButtonState,
//             data._id,
//             'PUT'
//           );
//         }
//       },
//       handleDeleteIconClick: (cardElement) => {
//         deleteCardPopup.setRemoveItemId(data._id);
//         deleteCardPopup.setRemoveItemMarkup(cardElement);
//         deleteCardPopup.setEventListeners();
//         deleteCardPopup.open();
//       },
//     },
//     '#template-card'
//   );
//   return card;
// };

// /**
//  * Заполнение инпутов при загрузке страницы
//  *
//  * @public
//  */
// const setFormFields = () => {
//   const info = userInfo.getUserInfo();

//   nameField.value = info.name;
//   jobField.value = info.about;
// };

// /**
//  * Функция проверки принадлежности карточки пользователю
//  *
//  * @param  {Object} cardElement - разметка карточки
//  * @param  {Object} ownerId - значение поля id создателя карточки
//  *
//  * @return {Object} - возвращает туже разметку карточки, но возможность удаления дооступна только для своих карточек
//  */
// const checkOwnerCard = (cardElement, ownerId, myId) => {
//   if (ownerId !== myId) {
//     cardElement.querySelector('.elements__delete-card').remove();
//   }
//   return cardElement;
// };

//Создание экземпляра информации о пользователе
const user = new User({
  titleSelector: profileTitleSelector,
  subtitleSelector: profileSubtitleSelector,
  avatarSelector: profileAvatarSelector,
});

// //Экземпляр попапа с картинкой
// const imagePopup = new PopupWithImage(popupImageSelector);

// //Создание экземпляра формы удаления карточки
// const deleteCardPopup = new PopupWithConfirm(popupConfirmSelector, {
//   handleSubmitForm: (cardId, cardMarkup) => {
//     renderLoading(popupConfirmSelector, true);
//     api
//       .deleteCard(cardId)
//       .then(() => {
//         cardMarkup.remove();
//         deleteCardPopup.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         renderLoading(popupConfirmSelector, false);
//       });
//   },
// });

// //Создание экземпляра формы редактирования профиля
// const editInfoPopup = new PopupWithForm(popupProfileSelector, {
//   handleSubmitForm: (data) => {
//     renderLoading(popupProfileSelector, true);
//     api
//       .editProfile(data)
//       .then((data) => {
//         userInfo.setUserInfo(data);
//         editInfoPopup.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => renderLoading(popupProfileSelector, false));
//   },
// });

// //Создание экземпляра формы редактирования аватара
// const updateAvatarPopup = new PopupWithForm(popupUpdateAvatarSelector, {
//   handleSubmitForm: (data) => {
//     renderLoading(popupUpdateAvatarSelector, true);
//     api
//       .updateUserAvatar(data.link)
//       .then((data) => {
//         document.querySelector(profileAvatarSelector).src = data.avatar;
//         updateAvatarPopup.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => renderLoading(popupUpdateAvatarSelector, false));
//   },
// });

(async () => {
  try {
    const userInfo: IUser = await apiUser.getProfileInfo();
    user.setUser = userInfo;
  } catch (err) {
    console.error(err);
  }
})();

(async () => {
  try {
    const card = await apiCard.getCards();
    console.log(card);

    const cardE: Card = new Card(
      '#template-card',
      {
        id: '',
        name: '',
        link: '',
        likes: [{ id: '', name: '', about: '', avatar: '' }],
        owner: { id: '', name: '', about: '', avatar: '' },
      },
      () => {},
      () => {},
      () => {}
    );
    cardE.getView();
  } catch (err) {
    console.error(err);
  }
})();

//apiUser
//.getInitialData()
// .getProfileInfo()
//Блок работы с информацией о пользователе
//.then((dataArray) => {
// const [userInfoData, cardInfoData] = dataArray;
// userInfo.setUserInfo(userInfoData);
// const myId = userInfo.getUserInfo().id;
// userInfo.setUserInfo(dataArray);
// return { cardInfoData, myId };
//})
//Блок работы с карточками
// .then(({ cardInfoData: data, myId }) => {
//   const renderCards = new Section(
//     {
//       items: data,
//       renderer: (data) => {
//         const card = createCard(data);
//         card.setCountLike(data.likes.length);
//         const cardElement = card.getView();

//         data.likes.forEach((item) => {
//           if (item._id === myId) {
//             card.setLikeButtonState(true);
//             card.toggleLikeButtonState(cardElement);
//           }
//         });
//         renderCards.addItem(
//           checkOwnerCard(cardElement, data.owner._id, myId),
//           true
//         );
//       },
//     },
//     containerSelector
//   );
//   renderCards.renderItems();

//Создание экземпляра формы добавления карточки
// const addCardPopup = new PopupWithForm(popupAddCardSelector, {
//   handleSubmitForm: ({ place: name, link }) => {
//     renderLoading(popupAddCardSelector, true);
//     api
//       .addCard({ name, link })
//       .then((data) => {
//         renderCards.addItem(createCard(data).getView(), false);
//         addCardPopup.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => renderLoading(popupAddCardSelector, false));
//   },
// });

//Открытие формы добавления карточек
//   openCardFormButton.addEventListener('click', () => {
//     addCardPopup.setEventListeners();
//     addCardPopup.open();
//   });

//   //Открытие формы обновления аватара
//   openUpdateFormButton.addEventListener('click', () => {
//     updateAvatarPopup.setEventListeners();
//     updateAvatarPopup.open();
//   });

//   //Открытие формы редактирования
//   openEditFormButton.addEventListener('click', () => {
//     setFormFields();
//     editInfoPopup.setEventListeners();
//     editInfoPopup.open();
//   });
// })
// //Блок работы с валидацией форм
// .then(() => {
//   const formList = document.querySelectorAll(validationObject.formSelector);
//   formList.forEach((formElement) => {
//     const formValid = new FormValidator(formElement, validationObject);
//     formValid.enableValidation();
//   });
// })
//catch((err) => console.log(err));
