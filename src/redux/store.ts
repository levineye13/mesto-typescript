import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ActionType } from './types';
import { combinedStateType } from './state';
import { rootReducer } from './reducers';

const store: Store<combinedStateType, ActionType> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
