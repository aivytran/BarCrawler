import { connect } from 'react-redux';
import { fetchBar } from '../../actions/bar_detail_actions';
import BarDetail from './bar_detail';

const mapStateToProps = state => {
  if (state.currentBar) {
    return (
      {
        bar: state.currentBar
      }
    )
  }
}


const mapDispatchToProps = dispatch => {
  return ({
    fetchBar: (name) => dispatch(fetchBar(name))
  })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarDetail);
