import { Action } from 'redux';

import { ICard } from '../../utils/interfaces';
import { SET_CARDS } from '../constants';

export interface SetCards extends Action {
  type: typeof SET_CARDS;
  payload: ICard[];
}
