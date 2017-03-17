import { connect } from 'react-redux';
import { login, logout, signup, deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  deleteErrors: () => dispatch(deleteErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
