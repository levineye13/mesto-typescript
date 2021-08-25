import ApiError from '../utils/ApiError';
import './index.css';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Render from '../components/Render';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithConfirm from '../components/PopupWithConfirm';
import User from '../components/User';
import apiUser from '../utils/api/ApiUser';
import apiCard from '../utils/api/ApiCard';
import {
  API_BASE_URL,
  API_KEY,
  validationConfig,
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
import { ICard, IFormInput, IUser } from '../utils/interfaces';

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

const handleChangeAvatar = async (link: string = '') => {
  try {
    const updatedAvatar = await apiUser.updateAvatar(link);
    user.setAvatar = updatedAvatar.avatar;
  } catch (err) {
    console.error(err);
  }
};

const handleEditProfile = async (name: string = '', about: string = '') => {
  try {
    const updatedProfile = await apiUser.editProfile({ name, about });
    user.setName = updatedProfile.name;
    user.setAbout = updatedProfile.about;
  } catch (err) {
    console.error(err);
  }
};

const handleAddCard = async (name: string = '', link: string = '') => {
  try {
    const cardData = await apiCard.addCard({ name, link });

    const newCard: Card = createCard(cardData);
    const cardElement: HTMLLIElement = newCard.getView();

    const cardRender: Render<Card> = new Render(containerSelector);
    cardRender.prependItem(cardElement);
  } catch (err) {
    console.error(err);
  }
};

const handleDeleteCard = async (_id: string) => {
  try {
    const deletedCard = await apiCard.deleteCard(_id);

    if (deletedCard) {
    }
  } catch (err) {
    console.error(err);
  }
};

//Создание экземпляра информации о пользователе
const user: User = new User({
  titleSelector: profileTitleSelector,
  subtitleSelector: profileSubtitleSelector,
  avatarSelector: profileAvatarSelector,
});

const imagePopup: PopupWithImage = new PopupWithImage(popupImageSelector);

const updateAvatarPopup: PopupWithForm = new PopupWithForm(
  popupAddCardSelector,
  {
    handleSubmitCallback: (data: IFormInput): void => {
      handleChangeAvatar(data.link);
    },
  }
);

const editProfilePopup: PopupWithForm = new PopupWithForm(
  popupAddCardSelector,
  {
    handleSubmitCallback: (data: IFormInput) => {
      handleEditProfile(data.name, data.about);
    },
  }
);

const addCardPopup: PopupWithForm = new PopupWithForm(popupAddCardSelector, {
  handleSubmitCallback: (data: IFormInput) => {
    handleAddCard(data.name, data.link);
  },
});

const deleteCardPopup: PopupWithConfirm = new PopupWithConfirm(
  popupConfirmSelector,
  {
    handleSubmitCallback: () => {},
  }
);

const handleLikeCard = async (card: Card) => {
  try {
    const id: string = card.getId;
    console.log(id);

    await apiCard.likeCard(id);
  } catch (err) {
    console.error(err);
  }
};

const handleDislikeCard = async (card: Card) => {
  try {
    const id: string = card.getId;
    console.log(id);
    await apiCard.dislikeCard(id);
  } catch (err) {
    console.error(err);
  }
};

const createCard = (card: ICard): Card => {
  const newCard = new Card('#template-card', {
    data: card,
    handleClickCallback: (name: string, link: string) => {
      imagePopup.open(name, link);
    },
    handleDeleteCallback: (element: HTMLLIElement) => {
      deleteCardPopup.open();
    },
    handleLikeCallback: () => {
      (async () => {
        await handleLikeCard(newCard);
      })();
    },
    handleDislikeCallback: () => {
      (async () => {
        await handleDislikeCard(newCard);
      })();
    },
  });

  return newCard;
};

(async (): Promise<void> => {
  try {
    const initialData: [IUser, ICard[]] = await Promise.all([
      apiUser.getUser(),
      apiCard.getCards(),
    ]);

    const [userData, cardsData] = initialData;

    user.setUser = userData;

    const cards: Card[] = cardsData.map((card: ICard) => {
      const newCard: Card = createCard(card);
      return newCard;
    });

    const cardRender: Render<Card> = new Render(containerSelector, {
      items: cards,
      renderCallback: (item: Card) => {
        const cardElement: HTMLLIElement = item.getView();
        cardRender.appendItem(cardElement);
      },
    });

    cardRender.renderItems();
  } catch (err) {
    console.error(err);
  }
})();

// (async () => {
//   try {
//     const userInfo: IUser = await apiUser.getUser();
//     user.setUser = userInfo;
//   } catch (err) {
//     console.error(err);
//   }
// })();

// (async () => {
//   try {
//     const apiCards: ICard[] = await apiCard.getCards();

//     const cards: Card[] = apiCards.map((card: ICard) => {
//       const newCard: Card = createCard(card);
//       return newCard;
//     });

//     const cardRender: Render<Card> = new Render(containerSelector, {
//       items: cards,
//       renderCallback: (item: Card) => {
//         const cardElement: HTMLLIElement = item.getView();
//         cardRender.appendItem(cardElement);
//       },
//     });

//     cardRender.renderItems();
//   } catch (err) {
//     console.error(err);
//   }
// })();

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
