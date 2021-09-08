import { ICard } from '../../utils/interfaces';
import { SET_CARDS } from '../constants';
import { SetCards } from '../types';

export const setCards = (cards: ICard[]): SetCards => ({
  type: SET_CARDS,
  payload: cards,
});
