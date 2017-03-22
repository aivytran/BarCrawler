import * as APIUtil from '../util/search_api_util'

export const RECEIVE_BAR = "RECEIVE_BAR";

export const fetchBar = (keyword, bounds) => dispatch => {
  return APIUtil.fetchBar(keyword, bounds)
    .then(bar => dispatch(receiveBar(bar, keyword)))
};

const receiveBar = (bar) => ({
  type: RECEIVE_BAR,
  bar
});
