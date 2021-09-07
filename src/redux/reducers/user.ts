import { Reducer, Action } from 'redux';

import { SET_USER } from '../constants';
import { ActionType } from '../types';
import { IUser } from '../../utils/interfaces';
import { combinedState } from '../state';

export const userReducer = (
  state: IUser = combinedState.user,
  action: ActionType
) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
};
