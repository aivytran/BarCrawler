import {RECEIVE_ALL_BARS} from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  bars : {},
  keyword : ""
}

const SearchReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case "RECEIVE_ALL_BARS":
      const newState = {
        bars: action.bars,
        keyword: action.keyword
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default SearchReducer;
