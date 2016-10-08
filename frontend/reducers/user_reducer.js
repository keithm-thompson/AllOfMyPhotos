import { combineReducers } from 'redux';
import PhotosReducer from './photos_reducer';
import PropertiesReducer from './properties_reducer';
import FollowingReducer from './following_reducer';
import FollowersReducer from './followers_reducer';
import merge from 'lodash/merge';

const UserReducer = combineReducers({
  properties: PropertiesReducer,
  photos: PhotosReducer,
  following: FollowingReducer,
  followers: FollowersReducer
});

export default UserReducer;
