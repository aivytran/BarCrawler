import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div id="header-view">
    <div id="header">
      <div className="header-view left">
        <div className="beer-logo">
          <img src="assets/beercup.png" alt="logo"/>
        </div>
      </div>

      <div className="main-logo">
        <img src="assets/main-logo1.png" alt="logo"/>
      </div>

      <div className="header-view right">
        <ul className="header-auth" >
          <GreetingContainer />
        </ul>
      </div>
    </div>
    { children }
  </div>
);

export default App;
