export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const RECEIVE_FEED_PHOTOS = "RECEIVE_FEED_PHOTOS";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const FETCH_INITIAL_FEED = "FETCH_INITIAL_FEED";
export const FETCH_NEXT_PHOTOS = "FETCH_NEXT_PHOTOS";
export const FETCH_FULL_FEED = "FETCH_FULL_FEED";
export const FETCH_PHOTOS = "FETCH_PHOTOS";
export const ADD_TAG_TO_PHOTO = "ADD_TAG_TO_PHOTO";
export const REMOVE_TAG_FROM_PHOTO = "REMOVE_TAG_FROM_PHOTO";
export const UPDATE_PHOTO = "UPDATE_PHOTO";

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

export const fetchNextPhotos = (startIdx, numPhotos) => ({
  type: FETCH_NEXT_PHOTOS,
  startIdx,
  numPhotos
});

export const fetchFullFeed = () => ({
  type: FETCH_FULL_FEED
});

export const fetchPhotos = (userId) => ({
  type: FETCH_PHOTOS,
  userId
});

export const addTagToPhoto = (photoId, tag_name) => ({
  type: ADD_TAG_TO_PHOTO,
  photoId,
  tag_name
});

export const removeTagFromPhoto = (photoId, tagId) => ({
  type: REMOVE_TAG_FROM_PHOTO,
  photoId,
  tagId
});

export const updatePhoto = (photo) => ({
  type: UPDATE_PHOTO,
  photo
});
