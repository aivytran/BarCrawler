import React from 'react';
import { Link, hashHistory} from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return(
      <SessionFormContainer />
    );
  }

  personalGreeting(currentUser, logout) {
    return(
      <li>
          <img src={window.user_logo} alt="logo"></img>
          <strong><Link onClick={() => hashHistory.push('/users')}>Profile</Link></strong>
          &nbsp;&nbsp;&nbsp;
          <strong><Link onClick={logout}>Log Out</Link></strong>
    	</li>
    );
  }

  render() {
    return(
      <div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()}
      </div>
    );
  }
}


export default Greeting;
