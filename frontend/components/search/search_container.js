import { connect } from 'react-redux';
import { searchBars } from '../../actions/search_actions';
import Search from './search';

const mapDispatchToProps = dispatch => {
  return ({
    searchBars: (keyword, bounds) => dispatch(searchBars(keyword, bounds))
  })
}


export default connect(
  null,
  mapDispatchToProps
)(Search);
