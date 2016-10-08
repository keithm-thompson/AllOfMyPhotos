import {
  RECEIVE_USER_FOLLOWERS,
} from '../actions/following_actions';

import merge from 'lodash/merge';

const FollowersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_FOLLOWERS:
      return merge ({},
        state,
        action.users
      );

    default:
      return state;
  }
};

export default FollowersReducer;
