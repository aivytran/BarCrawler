import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DELETE_ERRORS = "DELETE_ERRORS";
export const ADD_ROUTE_TO_USER = "ADD_ROUTE_TO_USER";


export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const deleteErrors = errors => ({
  type: DELETE_ERRORS,
  errors
});

export const saveRoute = (route) => dispatch => {
  return APIUtil.saveRoute(route)
    .then(user => dispatch(addRouteToUser(user)))
};

export const addRouteToUser = user => ({
  type: ADD_ROUTE_TO_USER,
  user
});
