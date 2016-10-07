import { combineReducers } from 'redux';
import FollowingReducer from './following_reducer';
import PhotosReducer from './photos_reducer';
import merge from 'lodash/merge';

const UserReducer = combineReducers({
  photos: PhotosReducer,
  following: FollowingReducer
});

export default UserReducer;
