import {
receiveUserProperties,
FETCH_USER
} from '../actions/user_actions';

import { fetchUser } from '../util/user_api_util';

import {
  receiveUserFollows,
  receiveUserFollowers
} from '../actions/following_actions';

import { receivePhotos } from '../actions/photo_actions';

import { receiveAlbums } from '../actions/album_actions';

const UserMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success;
  let error = (e) => console.log(e);

  switch (action.type) {
    case FETCH_USER:
      success = (user) => {
        dispatch(receiveUserProperties(user.properties));
        dispatch(receiveUserFollowers(user.followers));
        dispatch(receiveUserFollows(user.following));
        dispatch(receivePhotos(user.photos));
        dispatch(receiveAlbums(user.albums));
      };
      fetchUser(action.userId, success, error);
      return next(action);
    default:
      next(action);
  }
};

export default UserMiddleware;
