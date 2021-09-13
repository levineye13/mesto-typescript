import { SET_USER, UPDATE_USER } from './../constants';
import { IUser } from '../../utils/interfaces';
import { SetUser, UpdateAvatar, UpdateUser } from '../types';

export const setUser = (user: IUser): SetUser => ({
  type: SET_USER,
  payload: user,
});

export const updateUser = (user: {
  name: string;
  about: string;
}): UpdateUser => ({
  type: UPDATE_USER,
  payload: user,
});

export const updateAvatar = (user: { avatar: string }): UpdateAvatar => ({
  type: UPDATE_USER,
  payload: user,
});
