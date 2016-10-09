export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const RECEIVE_FEED_PHOTOS = "RECEIVE_FEED_PHOTOS";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const FETCH_INITIAL_FEED = "FETCH_INITIAL_FEED";
export const FETCH_FULL_FEED = "FETCH_FULL_FEED";
export const FETCH_PHOTOS = "FETCH_PHOTOS";

export const uploadPhoto = (photo) => ({
  type: UPLOAD_PHOTO,
  photo
});

export const deletePhoto = (photoId) => ({
  type: DELETE_PHOTO,
  photoId
});

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = (photo) => ({
  type: REMOVE_PHOTO,
  photo
});

export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receiveFeedPhotos = (photos) => ({
  type: RECEIVE_FEED_PHOTOS,
  photos
});

export const fetchInitialFeed = () => ({
  type: FETCH_INITIAL_FEED
});

export const fetchFullFeed = () => ({
  type: FETCH_FULL_FEED
});

export const fetchPhotos = (userId) => ({
  type: FETCH_PHOTOS,
  userId
});
