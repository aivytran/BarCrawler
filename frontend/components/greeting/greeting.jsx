import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (

      <li>
        <strong><Link to="/login" activeClassName="current">Log In</Link></strong>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <strong><Link to="/signup" activeClassName="current">Sign Up</Link></strong>
      </li>
    
);

const personalGreeting = (currentUser, logout) => (
  	<div className="header-auth">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
  	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
