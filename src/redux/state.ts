import { ICard, IUser } from '../utils/interfaces';

const initialUser: IUser = {
  _id: '',
  name: 'name',
  about: 'about',
  avatar: 'avatar',
};

const initialCards: ICard[] = [];

export const combinedState = { user: initialUser, cards: initialCards };
export type RootState = typeof combinedState;
