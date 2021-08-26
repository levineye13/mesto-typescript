export interface IRequestHeader {
  Accept?: string;
  'Content-Type'?: string;
  Authorization: string;
}

export interface IResponce<T> {
  readonly ok: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly headers: object;
  readonly json: () => Promise<T>;
  readonly text: () => Promise<T>;
}

export interface IApiError {
  message: string;
  status: number;
  statusText: string;
}

export interface IHttpMethod {
  OPTIONS: string;
  HEAD: string;
  GET: string;
  POST: string;
  PUT: string;
  PATCH: string;
  DELETE: string;
}

export interface IUser {
  _id: string;
  name: string;
  avatar: string;
  about: string;
}

export interface ICard {
  _id: string;
  name: string;
  link: string;
  likes: IUser[];
  owner: IUser;
}

export interface IFormInput {
  name?: string;
  avatar?: string;
  about?: string;
  link?: string;
  place?: string;
}

export interface IFormValidation {
  formSelector: string;
  inputSelector: string;
  submitSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
}
