import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import ApiUser from '../../../utils/api/ApiUser';
import { IUser } from '../../../utils/interfaces';
import { RootState } from '../../state';
import { AppActionTypes, AppThunkAction, AppThunkDispatch } from '../../types';
import { setUser } from '../';

export const fetchUser =
  (api: ApiUser): AppThunkAction<Promise<void>> =>
  async (dispatch: AppThunkDispatch): Promise<void> => {
    const user: IUser = await api.getUser();

    dispatch(setUser(user));
  };
