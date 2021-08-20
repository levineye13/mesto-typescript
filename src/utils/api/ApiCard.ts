import Api from './Api';
import { ICard, IRequestHeader } from '../interfaces';
import { HTTP_METHODS, API_BASE_URL, API_KEY } from '../../utils/constants';

class ApiCard extends Api {
  public constructor(_baseUrl: string, _headers: IRequestHeader) {
    super({ _baseUrl, _headers });
  }

  public async getCards(): Promise<ICard[]> {
    try {
      const cards = await fetch(`${this._baseUrl}/cards`, {
        method: HTTP_METHODS.GET,
        headers: { ...this._headers },
      });

      return this._checkResponceStatus(cards);
    } catch (err) {
      return err;
    }
  }
}

const apiCard = new ApiCard(API_BASE_URL, {
  Authorization: API_KEY,
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export default apiCard;
