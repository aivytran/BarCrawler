import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container'
import Search from './search/search_container'
import Bars from './bar/bars_container'
import BarDetailContainer from './bar/bar_detail_container'
import UserContainer from './user/user_container'
import RouteDetailContainer from './route/route_detail_container'

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Search}/>
          <Route path="/users" component={UserContainer}>
          </Route>
          <Route path="/users/:routeName" component={RouteDetailContainer}>
          </Route>
          <Route path="/bars" component={Bars}>
            <Route path="/bars/:barName" component={BarDetailContainer}>
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
