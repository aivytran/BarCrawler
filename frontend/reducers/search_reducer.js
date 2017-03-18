import {RECEIVE_ALL_BARS} from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    address: [],
    city: '',
    image_url: '',
    lat: '',
    lng: '',
    name: '',
    neighborhoods: [],
    open: false,
    phone_number: '',
    rating: '',
    review_count: '',
    yelp_url: ''
  }
}


const SearchReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case "RECEIVE_ALL_BARS":
      return merge({}, state, action.bars);
    default:
      return state;
  }
};

export default SearchReducer;
