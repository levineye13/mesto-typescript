import { IUser } from '../../utils/interfaces';
import { SetUser } from '../types';
import { SET_USER } from '../constants';

export const setUser = (user: IUser): SetUser => {
  return {
    type: SET_USER,
    payload: user,
  };
};
