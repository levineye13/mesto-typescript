import { Reducer } from 'redux';

import { SET_USER } from '../constants';
import { ActionType } from '../types';
import { IUser } from '../../utils/interfaces';
import { combinedState } from '../state';

export const userReducer: Reducer<IUser, ActionType> = (
  state: IUser = combinedState.user,
  action: ActionType
): IUser => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
};
