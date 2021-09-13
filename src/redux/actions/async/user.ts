import ApiUser from '../../../utils/api/ApiUser';
import { IUser } from '../../../utils/interfaces';
import { AppThunkAction, AppThunkDispatch } from '../../types';
import { setUser, updateUser, updateAvatar } from '../';

export const fetchUser =
  (api: ApiUser): AppThunkAction<Promise<void>> =>
  async (dispatch: AppThunkDispatch): Promise<void> => {
    const user: IUser = await api.getUser();

    dispatch(setUser(user));
  };

export const fetchUpdateUser =
  (api: ApiUser, user: { name: string; about: string }): AppThunkAction =>
  async (dispatch: AppThunkDispatch) => {
    const updatedUser: IUser = await api.editProfile(user);

    dispatch(updateUser(updatedUser));
  };

export const fetchUpdateAvatar =
  (api: ApiUser, avatar: string): AppThunkAction =>
  async (dispatch: AppThunkDispatch) => {
    const updatedUser: IUser = await api.updateAvatar(avatar);

    dispatch(updateAvatar(updatedUser));
  };
