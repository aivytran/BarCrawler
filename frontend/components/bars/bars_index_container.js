import { connect } from 'react-redux';
import BarsIndex from './bars_index';


const mapStateToProps = state => ({
  bars: Object.keys(state.bars).map(id => state.bars[id])
});


export default connect(
  mapStateToProps,
  null
)(BarsIndex);
