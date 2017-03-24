import { connect } from 'react-redux';
import Bars from './bars';
import {updateFilter} from '../../actions/filters_actions'
import {changeHoverBar, deleteHoverBar} from '../../actions/hover_actions'
import {changeView} from '../../actions/change_view_actions'
import { deleteBar, addLegsToRoute } from '../../actions/route_actions';
import { saveRoute } from '../../actions/session_actions'


const mapStateToProps = state => {
  if (state.search.bars) {
    return (
      {
        bars: Object.keys(state.search.bars).map(id => state.search.bars[id]),
        hoverBar: state.hover,
        view: state.currentView.view,
        route: state.route.bars,
        legs: state.route.legs,
        user: state.session.currentUser
      }
    )
  }
}


const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  changeHoverBar: (bar) => dispatch(changeHoverBar(bar)),
  deleteHoverBar: (bar) => dispatch(deleteHoverBar(bar)),
  changeView: (view) => dispatch(changeView(view)),
  deleteBar: (barName) => dispatch(deleteBar(barName)),
  addLegsToRoute: (legs) => dispatch(addLegsToRoute(legs)),
  saveRoute: (route) => dispatch(saveRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bars);
