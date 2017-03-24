import { CHANGE_VIEW } from '../actions/change_view_actions';
import merge from 'lodash/merge';

const _defaultView = Object.freeze({
  view: "bars-index"
});

const ChangeViewReducer = (state = _defaultView, action) => {
  Object.freeze(state)
  if (action.type === CHANGE_VIEW) {
    const newState = {
      view: action.view
    };
    return merge({}, state, newState);
  } else {
    return state;
  }
};

export default ChangeViewReducer;
