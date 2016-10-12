import {
  fetchInitialFeedPhotos,
  fetchFullFeedPhotos,
  fetchUserPhotos,
  uploadPhoto,
  deletePhoto,
  addTagToPhoto,
  removeTagFromPhoto
} from '../util/photos_api_util';

import {
  receivePhoto,
  receivePhotos,
  removePhoto,
  receiveFeedPhotos,
  updatePhoto,
  FETCH_INITIAL_FEED,
  FETCH_FULL_FEED,
  FETCH_PHOTOS,
  UPLOAD_PHOTO,
  DELETE_PHOTO,
  ADD_TAG_TO_PHOTO,
  REMOVE_TAG_FROM_PHOTO
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

    case ADD_TAG_TO_PHOTO:
      success = (photo) => dispatch(updatePhoto(photo));
      addTagToPhoto(action.photoId, action.tag_name, success, error);
      return next(action);

    case REMOVE_TAG_FROM_PHOTO:
      success = (photo) => dispatch(updatePhoto(photo));
      removeTagFromPhoto(action.photoId, action.tagId, success, error);
      return next(action);

    default:
      return next(action);
  }
};

export default PhotosMiddleware;
