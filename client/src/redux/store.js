import { createStore, combineReducers } from 'redux';

import { game } from './reducers/game';

const rootReducer = combineReducers({
  game,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
