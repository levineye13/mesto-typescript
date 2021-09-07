import { combineReducers, Reducer } from 'redux';

import { userReducer } from './user';
import { ActionType } from '../types';
import { combinedStateType } from '../state';

export const rootReducer: Reducer<combinedStateType, ActionType> =
  combineReducers({
    user: userReducer,
  });
