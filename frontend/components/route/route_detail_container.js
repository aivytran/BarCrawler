import { connect } from 'react-redux';
import RouteDetail from './route_detail';
import { changeCurrentRoute } from '../../actions/user_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    currentRoute: state.currentRoute
  }
}

const mapDispatchToProps = dispatch => ({
  changeCurrentRoute: (route) => dispatch(changeCurrentRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteDetail);
