import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import SearchReducer from './search_reducer';
import FiltersReducer from './filters_reducer';
import HoverReducer from './hover_reducer';
import BarDetailReducer from './bar_detail_reducer';
import ChangeViewReducer from './change_view_reducer';
import RouteReducer from './route_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  search: SearchReducer,
  filters: FiltersReducer,
  hover: HoverReducer,
  currentBar: BarDetailReducer,
  currentView: ChangeViewReducer,
  route: RouteReducer,
  currentRoute: UserReducer,
});

export default RootReducer;
