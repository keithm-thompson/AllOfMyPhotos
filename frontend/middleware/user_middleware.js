import {
receiveUserProperties,
FETCH_USER
} from '../actions/user_actions';

import {
  fetchUser
} from '../util/user_api_util';

import {
  receiveUserFollows
} from '../actions/following_actions';

import {
  receivePhotos
} from '../actions/photos_actions';

const UserMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success;
  let error;

  switch (action.type) {
    case FETCH_USER:
      success = (user) => {
        dispatch(receiveUserProperties({
          id: user.id,
          username: user.username,
          imageUrl: user.imageUrl
        }));
        dispatch(receiveUserFollows(user.following));
        dispatch(receivePhotos(user.photos));
      };
      return next(action);
    default:
      next(action);
  }
};

export default UserMiddleware;
