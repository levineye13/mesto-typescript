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
  id: string;
  name: string;
  avatar: string;
  about: string;
}

export interface ICard {
  id: string;
  name: string;
  link: string;
  likes: IUser[];
  owner: IUser;
}
