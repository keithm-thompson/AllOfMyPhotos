export const SEARCH_USERS = "SEARCH_USERS";
export const SEARCH_PHOTOS = "SEARCH_PHOTOS";
export const RECEIVE_USERS_SEARCH_RESULTS = "RECEIVE_USERS_SEARCH_RESULTS";
export const RECEIVE_PHOTOS_SEARCH_RESULTS = "RECEIVE_PHOTOS_SEARCH_RESULTS";

export const searchUsers = (username, callback) => ({
  type: SEARCH_USERS,
  username,
  callback
});

export const searchPhotos = (tag) => ({
  type: SEARCH_PHOTOS,
  tag
});

export const receiveUsersSearchResults = (users) => ({
  type: RECEIVE_USERS_SEARCH_RESULTS,
  users
});

export const receivePhotosSearchResults = (photos) => ({
  type: RECEIVE_PHOTOS_SEARCH_RESULTS,
  photos
});
