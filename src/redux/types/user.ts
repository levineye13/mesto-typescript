import { Action } from 'redux';

import { IUser } from '../../utils/interfaces';
import { SET_USER } from '../constants';

export interface SetUser extends Action {
  type: typeof SET_USER;
  payload: IUser;
}
