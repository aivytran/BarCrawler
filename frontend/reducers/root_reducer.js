import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bars: SearchReducer
});

export default RootReducer;
