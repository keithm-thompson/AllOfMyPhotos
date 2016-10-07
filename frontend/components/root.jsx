import React from 'react'
import { Provider } from 'react-redux';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';
import WelcomePage from './welcome_page';
import SearchPageContainer from './search/search_page_container';
import FeedContainer from './feed/feed_container';
import { searchUsers } from '../actions/search_actions';
import { fetchInitialFeed } from '../actions/photo_actions';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/welcome" component={WelcomePage} onEnter={ _redirectIfLoggedIn }></Route>
        <Route path="/" component={App} onEnter={ _ensureLoggedIn }>
          <IndexRoute component={FeedContainer} onEnter={ getInitialFeed } />
          <Route path="search" component={SearchPageContainer} onEnter={ checkSearchInState}></Route>
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

const checkSearchInState = () => {
  if (store.getState().search[0] === undefined) {
    let reg = /\?(.*)&/;
    let username = window.location.hash.match(reg)[1];
    store.dispatch(searchUsers(username, ()=>{}));
  }
}

const getInitialFeed = () => {
  store.dispatch(fetchInitialFeed());
}

export default Root;
