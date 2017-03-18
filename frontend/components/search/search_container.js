import { connect } from 'react-redux';
import { searchBars } from '../../actions/search_actions';
import Search from './search';

const mapDispatchToProps = dispatch => {
  return ({
    searchBars: (keyword) => dispatch(searchBars(keyword))
  })
}


export default connect(
  null,
  mapDispatchToProps
)(Search);
