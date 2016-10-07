import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';
import FeedPhotosReducer from './feed_photos_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  feedPhotos: FeedPhotosReducer,
  search: SearchReducer
});

export default RootReducer;
