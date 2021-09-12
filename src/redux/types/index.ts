import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { SetUser } from './user';
import { SetCards } from './card';
import { RootState } from '../state';

type AppActionTypes = SetUser | SetCards;

type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActionTypes
>;

type AppThunkDispatch = ThunkDispatch<RootState, unknown, AppActionTypes>;

export { AppActionTypes, AppThunkAction, AppThunkDispatch, SetUser, SetCards };
