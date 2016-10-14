export const SEARCH_USERS = "SEARCH_USERS";
export const SEARCH_PHOTOS = "SEARCH_PHOTOS";
export const RECEIVE_USERS_SEARCH_RESULTS = "RECEIVE_USERS_SEARCH_RESULTS";
export const RECEIVE_PHOTOS_SEARCH_RESULTS = "RECEIVE_PHOTOS_SEARCH_RESULTS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const searchUsers = (username, callback) => ({
  type: SEARCH_USERS,
  username,
  callback
});

export const searchPhotos = (tagName) => ({
  type: SEARCH_PHOTOS,
  tagName
});

export const receiveUsersSearchResults = (users) => ({
  type: RECEIVE_USERS_SEARCH_RESULTS,
  users
});

export const receivePhotosSearchResults = (photos) => ({
  type: RECEIVE_PHOTOS_SEARCH_RESULTS,
  photos
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});
