import ApiError from '../ApiError';
import { IRequestHeader, IResponce } from '../interfaces';

class Api {
  protected readonly _baseUrl: string;
  protected readonly _headers: IRequestHeader;

  protected constructor(err: { _baseUrl: string; _headers: IRequestHeader }) {
    this._baseUrl = err._baseUrl;
    this._headers = err._headers;
  }

  protected _checkResponceStatus<T>(res: IResponce<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!res.ok) {
        const error = new ApiError({
          message: `Error: ${res.status} - ${res.statusText}`,
          status: res.status,
          statusText: res.statusText,
        });
        return reject(error);
      }

      const json = res.json();
      return resolve(json);
    });
  }
}

export default Api;
