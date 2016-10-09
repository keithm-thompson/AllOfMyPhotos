import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';
import WelcomePage from './welcome_page';
import SearchPageContainer from './search/search_page_container';
import FeedContainer from './feed/feed_container';
import UserShowContainer from './user_show/user_show_container';
import UserPhotosContainer from './user_show/user_photos_container';
import { searchUsers } from '../actions/search_actions';
import { fetchInitialFeed } from '../actions/photo_actions';
import { fetchUser } from '../actions/user_actions';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/welcome" component={WelcomePage} onEnter={ _redirectIfLoggedIn } />
        <Route path="/" component={App} onEnter={ _ensureLoggedIn }>
          <IndexRoute component={FeedContainer} onEnter={ getInitialFeed } />
          <Route path="search" component={ SearchPageContainer } onEnter={ checkSearchInState} ></Route>
          <Route path="users/:id" component={ UserShowContainer } onEnter={ getUser }>
            <IndexRoute component={ UserPhotosContainer } />
          </Route>
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
  store.dispatch(fetchUser(store.getState().session.currentUser.id));
};

const getInitialFeed = () => {
  store.dispatch(fetchInitialFeed());
};

const getUser = () => {
  let userIdRegex = /^#\/users\/(.*)\?/;
  let userId = window.location.hash.match(userIdRegex)[1];
  store.dispatch(fetchUser(userId));
};

export default Root;
