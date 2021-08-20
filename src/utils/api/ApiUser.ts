import Api from './Api';
import { IRequestHeader, IUser } from '../interfaces';
import { HTTP_METHODS, API_BASE_URL, API_KEY } from '../../utils/constants';

class ApiUser extends Api {
  public constructor(_baseUrl: string, _headers: IRequestHeader) {
    super({ _baseUrl, _headers });
  }

  public async getProfileInfo(): Promise<IUser> {
    try {
      const user = await fetch(`${this._baseUrl}/users/me`, {
        method: HTTP_METHODS.GET,
        headers: { ...this._headers },
      });

      return this._checkResponceStatus(user);
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

export default apiUser;
