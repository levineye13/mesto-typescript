import ApiError from '../utils/ApiError';
import './index.css';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Render from '../components/Render';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithConfirm from '../components/PopupWithConfirm';
import User from '../components/User';
import Loader from '../components/Loader';
import Api from '../utils/api/Api';
import apiUser from '../utils/api/ApiUser';
import apiCard from '../utils/api/ApiCard';
import {
  cardTemplateSelector,
  containerSelector,
  openEditFormButton,
  openCardFormButton,
  openUpdateFormButton,
  profileAvatarSelector,
  profileTitleSelector,
  profileSubtitleSelector,
  popupAddCardSelector,
  popupConfirmSelector,
  popupImageSelector,
  popupProfileSelector,
  popupUpdateAvatarSelector,
  validationConfig,
} from './../utils/constants';
import { ICard, IFormInput, IUser } from '../utils/interfaces';

const loader = new Loader();

const user: User = new User({
  titleSelector: profileTitleSelector,
  subtitleSelector: profileSubtitleSelector,
  avatarSelector: profileAvatarSelector,
});

const imagePopup: PopupWithImage = new PopupWithImage(popupImageSelector);

const updateAvatarPopup: PopupWithForm = new PopupWithForm(
  popupUpdateAvatarSelector,
  {
    handleSubmitCallback: (data: IFormInput): void => {
      handleChangeAvatar(updateAvatarPopup, data.link);
    },
  }
);

const editProfilePopup: PopupWithForm = new PopupWithForm(
  popupProfileSelector,
  {
    handleSubmitCallback: (data: IFormInput) => {
      handleEditProfile(editProfilePopup, data.name, data.about);
    },
  }
);

const addCardPopup: PopupWithForm = new PopupWithForm(popupAddCardSelector, {
  handleSubmitCallback: (data: IFormInput) => {
    handleAddCard(addCardPopup, data.place, data.link);
  },
});

const deleteCardPopup: PopupWithConfirm = new PopupWithConfirm(
  popupConfirmSelector,
  {
    handleSubmitCallback: (id: string, markup: HTMLElement) => {
      handleDeleteCard(deleteCardPopup, id, markup);
    },
  }
);

const handleChangeAvatar = async (popup: PopupWithForm, link: string = '') => {
  try {
    const updatedAvatar = await apiUser.updateAvatar(link);

    if (updatedAvatar) {
      user.setAvatar = updatedAvatar.avatar;
      popup.close();
    }
  } catch (err) {
    console.error(err);
  }
};

const handleEditProfile = async (
  popup: PopupWithForm,
  name: string = '',
  about: string = ''
) => {
  try {
    const updatedProfile = await apiUser.editProfile({ name, about });

    if (updatedProfile) {
      user.setName = updatedProfile.name;
      user.setAbout = updatedProfile.about;
      popup.close();
    }
  } catch (err) {
    console.error(err);
  }
};

const handleAddCard = async (
  popup: PopupWithForm,
  name: string = '',
  link: string = ''
) => {
  try {
    const cardData = await apiCard.addCard({ name, link });

    if (cardData) {
      const newCard: Card = createCard(cardData);
      const cardElement: HTMLLIElement = newCard.getView();

      const cardRender: Render<Card> = new Render(containerSelector);
      cardRender.prependItem(cardElement);

      popup.close();
    }
  } catch (err) {
    console.error(err);
  }
};

const handleDeleteCard = async (
  popup: PopupWithConfirm,
  id: string,
  markup: HTMLElement
) => {
  try {
    const deletedCard = await apiCard.deleteCard(id);

    if (deletedCard) {
      markup.remove();
      popup.close();
    }
  } catch (err) {
    console.error(err);
  }
};

const handleLikeCard = async (cardId: string) => {
  try {
    await apiCard.likeCard(cardId);
  } catch (err) {
    console.error(err);
  }
};

const handleDislikeCard = async (cardId: string) => {
  try {
    await apiCard.dislikeCard(cardId);
  } catch (err) {
    console.error(err);
  }
};

const createCard = (card: ICard): Card => {
  const newCard = new Card(cardTemplateSelector, {
    data: card,
    handleClickCallback: (name: string, link: string) => {
      imagePopup.open(name, link);
    },
    handleDeleteCallback: (element: HTMLLIElement) => {
      deleteCardPopup.setItemId = card._id;
      deleteCardPopup.setItemMarkup = element;
      deleteCardPopup.open();
    },
    handleLikeCallback: (cardId: string) => {
      handleLikeCard(cardId);
    },
    handleDislikeCallback: (cardId: string) => {
      handleDislikeCard(cardId);
    },
  });

  return newCard;
};

const handleOpenModal = (): void => {
  openEditFormButton.addEventListener('click', editProfilePopup.open);
  openUpdateFormButton.addEventListener('click', updateAvatarPopup.open);
  openCardFormButton.addEventListener('click', addCardPopup.open);
};

const findAndValidateForms = (): void => {
  const formsCollection: HTMLCollectionOf<HTMLFormElement> = document.forms;
  const forms: HTMLFormElement[] = [...formsCollection];

  forms.forEach((form) => {
    const validator = new FormValidator(form, validationConfig);
    validator.enable();
  });
};

(async (): Promise<void> => {
  try {
    loader.start();

    const initialData = await Api.getInitialData([
      apiUser.getUser,
      apiCard.getCards,
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
        const userId: string = user.getId;

        item.checkLike(userId, cardElement);
        item.checkOwner(userId, cardElement);

        cardRender.appendItem(cardElement);
      },
    });

    cardRender.renderItems();

    handleOpenModal();
    findAndValidateForms();
  } catch (err) {
    console.error(err);
  } finally {
    loader.stop();
  }
})();
