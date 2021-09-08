import { Reducer } from 'redux';

import { ActionType } from './../types';
import { combinedState } from '../state';
import { SET_CARDS } from '../constants';
import { ICard } from '../../utils/interfaces';

export const cardReducer: Reducer<ICard[], ActionType> = (
  state: ICard[] = combinedState.cards,
  action: ActionType
): ICard[] => {
  switch (action.type) {
    case SET_CARDS:
      return [...state, ...(action.payload as [])];

    default:
      return [...state];
  }
};
