import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  // window.searchUsers = fetch;
  if (window.currentUser) {

    preloadedState = {
      session: {
        currentUser: window.currentUser
      },
      following: window.following,
    };

  }
  const store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
