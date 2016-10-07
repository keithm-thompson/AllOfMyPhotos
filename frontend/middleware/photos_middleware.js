import {
  fetchFeedPhotos,
  fetchUserPhotos,
  uploadPhoto,
  deletePhoto,
} from '../util/photos_api_util';

import {
  receivePhoto,
  receivePhotos,
  removePhoto,
  receiveFeedPhotos,
  FETCH_FEED,
  FETCH_PHOTOS,
  UPLOAD_PHOTO,
  DELETE_PHOTO
} from '../actions/photo_actions';


const PhotosMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  let error = (e) => console.log(e);

  switch (action.type) {
    case FETCH_FEED:
      success = (photos) => dispatch(receiveFeedPhotos(photo));
      fetchFeedPhotos(succes, error)
      return next(action);

    case FETCH_PHOTOS:
      success = (photos) => dispatch(receivePhotos(photo));
      fetchUserPhotos(action.userId, success, error);
      return next(action);

    case UPLOAD_PHOTO:
      success = (photo) => dispatch(receivePhoto(photo));
      uploadPhoto(photo, success, error)
      return next(action);

    case DELETE_PHOTO:
      success = (photo) => dispatch(removePhoto(photo));
      deletePhoto(action.photoId, success, error)
      return next(action);
      
    default:
      return next(action);
  }
};
