import { connect } from 'react-redux';
import { fetchBar } from '../../actions/bar_detail_actions';
import { addBar } from '../../actions/route_actions';

import BarDetail from './bar_detail';

const mapStateToProps = state => {
  if (state.currentBar) {
    return (
      {
        bar: state.currentBar,
        route: state.route.bars
      }
    )
  }
}


const mapDispatchToProps = dispatch => {
  return ({
    fetchBar: (name) => dispatch(fetchBar(name)),
    addBar: (bar) => dispatch(addBar(bar))
  })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarDetail);
