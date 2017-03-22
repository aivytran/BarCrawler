import {RECEIVE_BAR} from '../actions/bar_detail_actions';
import merge from 'lodash/merge';


const BarDetailReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case "RECEIVE_BAR":
      return merge({}, state, action.bar);
    default:
      return state;
  }
};

export default BarDetailReducer;
