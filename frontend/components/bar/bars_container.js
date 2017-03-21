import { connect } from 'react-redux';
import Bars from './bars';
import {updateFilter} from '../../actions/filters_actions'
import {changeHoverBar, deleteHoverBar} from '../../actions/hover_actions'


const mapStateToProps = state => {
  if (state.search.bars) {
    return (
      {
        bars: Object.keys(state.search.bars).map(id => state.search.bars[id]),
        hoverBar: state.hover
      }
    )
  }
}


const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  changeHoverBar: (bar) => dispatch(changeHoverBar(bar)),
  deleteHoverBar: (bar) => dispatch(deleteHoverBar(bar))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bars);
