import {
  fetchUserSearchResults,
  fetchPhotoSearchResults
} from '../util/search_api_util';

import {
  SEARCH_USERS,
  SEARCH_PHOTOS,
  searchUsers,
  searchPhotos,
  receiveUsersSearchResults,
  receivePhotosSearchResults
} from '../actions/search_actions';

const SearchMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case SEARCH_USERS:
      success = (users) => {
        action.callback();
        return dispatch(receiveUsersSearchResults(users));
      };
      error = (e) => console.log(e);
      fetchUserSearchResults(action.username, success, error);
      return next(action);
    case SEARCH_PHOTOS:
      success = (photos) =>{
        action.callback();
        return dispatch(receivePhotosSearchResults(photos));
      };
      error = (e) => console.log(e);
      fetchPhotoSearchResults(action.tagName, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
