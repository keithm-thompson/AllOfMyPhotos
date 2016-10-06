import {
  receiveUserFollows,
  receiveUserFollowed,
  removeFollowRelationship,
  RECEIVE_USER_FOLLOWS,
  RECEIVE_USER_FOLLOWED,
  REMOVE_FOLLOW_RELATIONSHIP
} from '../actions/following_actions';

import merge from 'lodash/merge';

const FollowingReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_USER_FOLLOWED:
      return merge({}, state, action.userFollowed);

    case RECEIVE_USER_FOLLOWS:
      return merge({}, state, action.userFollows);

    case REMOVE_FOLLOW_RELATIONSHIP:
      let dupped_state = merge({}, state);
      delete dupped_state.action[(action.user).id];
      return dupped_state;

    default:
      return state;
  }
};

export default FollowingReducer;
