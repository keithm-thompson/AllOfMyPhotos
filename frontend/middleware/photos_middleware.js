import {
  fetchInitialFeedPhotos,
  fetchFullFeedPhotos,
  fetchUserPhotos,
  uploadPhoto,
  deletePhoto
} from '../util/photos_api_util';

import {
  receivePhoto,
  receivePhotos,
  removePhoto,
  receiveFeedPhotos,
  FETCH_INITIAL_FEED,
  FETCH_FULL_FEED,
  FETCH_PHOTOS,
  UPLOAD_PHOTO,
  DELETE_PHOTO
} from '../actions/photo_actions';


const PhotosMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success;
  let error = (e) => console.log(e);

  switch (action.type) {
    case FETCH_INITIAL_FEED:
      success = (photos) => dispatch(receiveFeedPhotos(photos));
      fetchInitialFeedPhotos(success, error);
      return next(action);

    case FETCH_FULL_FEED:
      success = (photos) => dispatch(receiveFeedPhotos(photos));
      fetchFullFeedPhotos(success, error);
      return next(action);

    case FETCH_PHOTOS:
      success = (photos) => dispatch(receivePhotos(photos));
      fetchUserPhotos(action.userId, success, error);
      return next(action);

    case UPLOAD_PHOTO:
      success = (photo) => dispatch(receivePhoto(photo));
      uploadPhoto(action.photo, success, error);
      return next(action);

    case DELETE_PHOTO:
      success = (photo) => dispatch(removePhoto(photo));
      deletePhoto(action.photoId, success, error);
      return next(action);

    default:
      return next(action);
  }
};

export default PhotosMiddleware;
