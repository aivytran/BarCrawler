import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div id="master-view">
    <div id="header-view">
      <div id="header">
        <div className="header-view left">
          <div id="logo" className="beer-logo">
            <img src={window.beercup_url} alt="logo"/>
          </div>
        </div>

        <div id="logo" className="main-logo">
          <img src={window.main_logo} alt="logo"/>
        </div>

        <div className="header-view right">
          <ul className="header-auth" >
            <GreetingContainer />
          </ul>
        </div>
      </div>
    </div>
    { children }
  </div>
);

export default App;
