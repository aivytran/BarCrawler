import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  DELETE_ERRORS,
  ADD_ROUTE_TO_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case DELETE_ERRORS:
      return merge({}, _nullUser, {
        errors : []
      });
    case ADD_ROUTE_TO_USER:
      const newUser = action.user
      return merge({}, _nullUser, {
        currentUser: newUser
      });
    default:
      return state;
  }
};

export default SessionReducer;
