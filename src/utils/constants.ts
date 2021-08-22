import { IHttpMethod, IFormValidation } from './interfaces';

export const API_BASE_URL: string =
  'https://mesto.nomoreparties.co/v1/cohort-16';

export const API_KEY: string = 'f1f27dcb-4c71-4cd5-a34d-2e8f5fd4811e';

export const validationConfig: IFormValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitSelector: '.popup__save-button',
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

export const HTTP_METHODS: IHttpMethod = {
  OPTIONS: 'OPTIONS',
  HEAD: 'HEAD',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const KEY_ESCAPE = 'Escape';
