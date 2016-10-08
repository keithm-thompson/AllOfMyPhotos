 import {
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  RECEIVE_PHOTOS
} from '../actions/photo_actions';

export const PhotoReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return [
        ...action.photos
      ];

    case RECEIVE_PHOTO:
      return [
        action.photo,
        ...state
      ];
    case REMOVE_PHOTO:
      let photoRemoved = state.filter((el) => {
        return el.id !== (action.photo).id;
      });
      return photoRemoved;

    default:
      return [
        ...state
      ];

  }
};

export default PhotoReducer;
