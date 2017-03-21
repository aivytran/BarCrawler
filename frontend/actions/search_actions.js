import * as APIUtil from '../util/search_api_util'

export const RECEIVE_ALL_BARS = "RECEIVE_ALL_BARS";

export const searchBars = (keyword, bounds) => dispatch => {
  return APIUtil.searchBars(keyword, bounds)
    .then(bars => dispatch(receiveAllBars(bars, keyword)))
};

const receiveAllBars = (bars, keyword) => ({
  type: RECEIVE_ALL_BARS,
  bars: bars,
  keyword: keyword
});
