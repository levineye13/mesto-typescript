import { IUser } from '../utils/interfaces';

const initialUser: IUser = {
  _id: '',
  name: 'name',
  about: 'about',
  avatar: 'avatar',
};

export const combinedState = { user: initialUser };
export type combinedStateType = { user: IUser };
