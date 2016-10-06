import {
  RECEIVE_USER_FOLLOWS,
  RECEIVE_USER_FOLLOWED,
  REMOVE_FOLLOW_RELATIONSHIP
} from '../actions/following_actions';

import merge from 'lodash/merge';

const FollowingReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_FOLLOWED:
      return merge ({},
        state,
        action.user
      );

    case RECEIVE_USER_FOLLOWS:
      return action.users;

    case REMOVE_FOLLOW_RELATIONSHIP:
      let dupped_state = merge({}, state);
      delete dupped_state[(Object.keys(action.user))[0]]
      return dupped_state;

    default:
      return state;
  }
};

export default FollowingReducer;
