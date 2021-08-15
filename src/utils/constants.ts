export const validationObject: Object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export const openEditFormButton: HTMLButtonElement = document.querySelector(
  '.profile__edit-button'
) as HTMLButtonElement;

export const openCardFormButton: HTMLButtonElement = document.querySelector(
  '.profile__add-button'
) as HTMLButtonElement;

export const openUpdateFormButton: HTMLButtonElement = document.querySelector(
  '.profile__update-button'
) as HTMLButtonElement;

export const nameField: HTMLInputElement = document.querySelector(
  '#name-input'
) as HTMLInputElement;

export const jobField: HTMLInputElement = document.querySelector(
  '#job-input'
) as HTMLInputElement;

export const containerSelector: string = '.elements__list';
export const profileAvatarSelector: string = '.profile__avatar';
export const profileTitleSelector: string = '.profile__title';
export const profileSubtitleSelector: string = '.profile__subtitle';
export const popupImageSelector: string = '.popup_type_image';
export const popupProfileSelector: string = '.popup_type_profile';
export const popupAddCardSelector: string = '.popup_type_add-card';
export const popupConfirmSelector: string = '.popup_type_confirm';
export const popupUpdateAvatarSelector: string = '.popup_type_update-avatar';

interface IHttpMethod {
  OPTIONS: string;
  HEAD: string;
  GET: string;
  POST: string;
  PUT: string;
  PATCH: string;
  DELETE: string;
}

export const HTTP_METHODS: IHttpMethod = {
  OPTIONS: 'OPTIONS',
  HEAD: 'HEAD',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};
