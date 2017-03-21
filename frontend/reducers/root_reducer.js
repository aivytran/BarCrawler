import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import SearchReducer from './search_reducer';
import FiltersReducer from './filters_reducer';
import HoverReducer from './hover_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  search: SearchReducer,
  filters: FiltersReducer,
  hover: HoverReducer
});

export default RootReducer;
