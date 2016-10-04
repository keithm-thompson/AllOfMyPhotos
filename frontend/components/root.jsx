import React from 'react'
import { Provider } from 'react-redux';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';
import WelcomePage from './welcome_page';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/welcome" component={WelcomePage} onEnter={ _redirectIfLoggedIn }></Route>
      <Route path="/" component={App} onEnter={ _ensureLoggedIn }>
        //more routes to come!
      </Route>
    </Router>
  </Provider>
);

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
}

const _ensureLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser) {
    replace('/welcome');
  }
};

export default Root;
