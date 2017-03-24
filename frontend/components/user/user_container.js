import { connect } from 'react-redux';
import User from './user';
import { changeCurrentRoute } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  changeCurrentRoute: (route) => dispatch(changeCurrentRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
