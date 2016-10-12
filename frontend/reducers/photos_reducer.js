 import {
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  RECEIVE_PHOTOS,
  UPDATE_PHOTO
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

    case UPDATE_PHOTO:
      let photo = action.photo;
      let index = -1;
      for (let i = 0; i < state.length; i++) {
        if(state[i].id === photo.id) {
          index = i;
          break;
        }
      }
      return [
        ...(state.slice(0, index)),
        photo,
        ...(state.slice(index+1))
      ]

    default:
      return [
        ...state
      ];

  }
};

export default PhotoReducer;
