import { UPDATE_HOVER_BAR, DELETE_HOVER_BAR } from '../actions/hover_actions';
import merge from 'lodash/merge';


const HoverReducer = (state = {}, action) => {
  Object.freeze(state)
  if (action.type === UPDATE_HOVER_BAR) {
    const newState = {
      name: action.barName,
      delete: false
    };
    return merge({}, state, newState);
  } else if (action.type === DELETE_HOVER_BAR) {
    return merge({}, state, {name: action.barName, delete: true})
  } else {
    return state;
  }
};

export default HoverReducer;
