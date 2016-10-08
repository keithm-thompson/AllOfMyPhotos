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
      return merge({}, action.users);

    case REMOVE_FOLLOW_RELATIONSHIP:
      let duppedState = merge({}, state);
      delete duppedState[(Object.keys(action.user))[0]];
      return duppedState;

    default:
      return state;
  }
};

export default FollowingReducer;
