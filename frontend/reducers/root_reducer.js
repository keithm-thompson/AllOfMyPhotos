import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FollowingReducer from './following_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  following: FollowingReducer
});

export default RootReducer;
