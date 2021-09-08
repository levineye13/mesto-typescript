import { Dispatch, Middleware, MiddlewareAPI, Action } from 'redux';

export const logger: Middleware =
  ({ getState }: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: Action) => {
    console.log('Action:', action);
    const res = next(action);
    console.log('State after dispatch:', getState());
    return res;
  };
