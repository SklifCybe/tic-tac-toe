import { createStore, combineReducers } from 'redux';

import { game } from './reducers/game';
import { join } from './reducers/join';

const rootReducer = combineReducers({
  game,
  join
});

export default createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());