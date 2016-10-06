import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FollowingReducer from './following_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  following: FollowingReducer,
  search: SearchReducer
});

export default RootReducer;
