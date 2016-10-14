import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';
import WelcomePage from './welcome_page';
import SearchPageContainer from './search/search_page_container';
import FeedContainer from './feed/feed_container';
import UserShowContainer from './user_show/user_show_container';
import UserPhotosContainer from './user_show/user_photos_container';
import UploadPhotoFormContainer from './user_show/upload_photo_container';
import UserAlbumsContainer from './user_show/user_albums_container';
import ViewPhotoContainer from './photos/view_photo_container';
import ViewAlbumContainer from './albums/view_album_container';
import CreateAlbumContainer from './albums/create_album_container';
import EditAlbumContainer from './albums/edit_album_container';
import { searchUsers, searchPhotos, clearSearch } from '../actions/search_actions';
import { fetchInitialFeed } from '../actions/photo_actions';
import { fetchUser } from '../actions/user_actions';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory} store={store}>
        <Route path="/welcome" component={WelcomePage} onEnter={ _redirectIfLoggedIn(store) } />
        <Route path="/" component={App} onEnter={ _ensureLoggedIn(store) }>
          <IndexRoute component={FeedContainer} />
          <Route path="search" component={ SearchPageContainer } onEnter={ checkSearchInState(store) } ></Route>
          <Route path="search/photos" component={ SearchPageContainer } onEnter={ checkSearchInState(store) } ></Route>
          <Route path="/users/:user_id/photos/:id" component={ ViewPhotoContainer } onEnter={ getUser(store) }></Route>
          <Route path="/users/:user_id/albums/:id" component={ ViewAlbumContainer } onEnter={ getUser(store) }></Route>
          <Route path="/users/:user_id/create_album" component={ CreateAlbumContainer } onEnter={ getUser(store) }></Route>
          <Route path="/users/:user_id/edit_album/:id" component={ EditAlbumContainer } onEnter={ getUser(store) }></Route>
          <Route path="users/:user_id" component={ UserShowContainer } onEnter={ getUser(store) }>
            <IndexRoute component={ UserPhotosContainer } />
            <Route path="upload" component={ UploadPhotoFormContainer }></Route>
            <Route path="albums" component={ UserAlbumsContainer }></Route>
          </Route>
        </Route>
    </Router>
  </Provider>
);

const _redirectIfLoggedIn = (store) => (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
};

const _ensureLoggedIn = (store) => (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser) {
    replace('/welcome');
  }
};

const checkSearchInState = (store) => {
  return (nextState, something) => {
    store.dispatch(clearSearch());
  if (nextState.location.pathname == "/search/photos" || nextState.location.pathname == "/search/photos/" ) {
    let tagName = nextState.location.search.slice(1);
    store.dispatch(searchPhotos(tagName));
  } else {
      let username = nextState.location.search.slice(1);
      store.dispatch(searchUsers(username, ()=>{}));
    }
  store.dispatch(fetchUser(store.getState().session.currentUser.id));
  };
};

// const getInitialFeed = () => {
//   store.dispatch(fetchInitialFeed());
// };

const getUser = (store) => (nextState) => {
  let userId = parseInt(nextState.params.user_id);
  store.dispatch(fetchUser(userId));
};

export default Root;
