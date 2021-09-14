import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import type { AppActionTypes } from './types';
import type { RootState } from './state';
import { rootReducer } from './reducers';

const store: Store<RootState, AppActionTypes> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
