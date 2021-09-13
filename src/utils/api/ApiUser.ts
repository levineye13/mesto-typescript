import Api from './Api';
import { IApiUser, IRequestHeader, IUser } from '../interfaces';
import { HTTP_METHODS, API_BASE_URL, API_KEY } from '../../utils/constants';

class ApiUser extends Api implements IApiUser {
  public constructor(_baseUrl: string, _headers: IRequestHeader) {
    super({ _baseUrl, _headers });
  }

  public getUser = async (): Promise<IUser> => {
    try {
      const res = await fetch(`${this._baseUrl}/users/me`, {
        method: HTTP_METHODS.GET,
        headers: { ...this._headers },
      });

      return this._checkResponceStatus(res);
    } catch (err) {
      return err;
    }
  };

  public async editProfile(user: {
    name: string;
    about: string;
  }): Promise<IUser> {
    try {
      const res = await fetch(`${this._baseUrl}/users/me`, {
        method: HTTP_METHODS.PATCH,
        headers: { ...this._headers },
        body: JSON.stringify({
          name: user.name,
          about: user.about,
        }),
      });

      return this._checkResponceStatus(res);
    } catch (err) {
      return err;
    }
  }

  public async updateAvatar(avatarLink: string): Promise<IUser> {
    try {
      const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
        method: HTTP_METHODS.PATCH,
        headers: { ...this._headers },
        body: JSON.stringify({
          avatar: avatarLink,
        }),
      });

      return this._checkResponceStatus(res);
    } catch (err) {
      return err;
    }
  }
}

const apiUser = new ApiUser(API_BASE_URL, {
  Authorization: API_KEY,
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export default ApiUser;
export { apiUser };
