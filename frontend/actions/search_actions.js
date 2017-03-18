import * as APIUtil from '../util/search_api_util'

export const RECEIVE_ALL_BARS = "RECEIVE_ALL_BARS";

export const searchBars = keyword => dispatch => {
  return APIUtil.searchBars(keyword)
    .then(bars => dispatch(receiveAllBars(bars)))
};

const receiveAllBars = bars => ({
  type: RECEIVE_ALL_BARS,
  bars
});
