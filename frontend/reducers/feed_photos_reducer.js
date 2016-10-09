import {
  RECEIVE_FEED_PHOTOS
} from '../actions/photo_actions';

const FeedPhotosReducer = (state = [], action) => {
  
  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return [
        ...action.photos
      ];
    default:
      return [
        ...state
      ];
  }
};

export default FeedPhotosReducer;
