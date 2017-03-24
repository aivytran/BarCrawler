import { ADD_BAR, DELETE_BAR } from '../actions/change_view_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  bars: [],
  legs: []
});


const RouteReducer = (state =_defaultState, action) => {
  Object.freeze(state)
  if (action.type === "ADD_BAR") {
    return {
      bars: state.bars.concat([action.bar]),
      legs: state.legs
    }
  } else if (action.type === "DELETE_BAR") {
    const bars = state.bars.filter(state_bar => state_bar.name !== action.barName)
    return {
      bars: bars,
      legs: state.legs
    }
  } else if (action.type === "ADD_LEGS_TO_ROUTE"){
    const newState = {
      bars: state.bars,
      legs: action.legs
    }
    return newState
  } else {
    return state;
  }
};

export default RouteReducer;
