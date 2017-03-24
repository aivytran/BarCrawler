import { CHANGE_CURRENT_ROUTE } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state ={}, action) => {
  Object.freeze(state)
  if (action.type === "CHANGE_CURRENT_ROUTE") {
    const newState = action.route
    return merge({}, state, newState)
  } else {
    return state;
  }
};

export default UserReducer;
