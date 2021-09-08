import { ActionType } from './types';
import { combinedStateType } from './state';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import { logger } from './middlewares';

const store: Store<combinedStateType, ActionType> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export { store };
