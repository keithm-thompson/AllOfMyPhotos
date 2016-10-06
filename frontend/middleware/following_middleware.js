import {
  createFollowRelationship,
  deleteFollowRelationship,
  CREATE_FOLLOW_RELATIONSHIP,
  DELETE_FOLLOW_RELATIONSHIP
} from '../util/following_api_util';

import {
  receiveUserFollows,
  receiveUserFollowed,
  removeFollowRelationship,
} from '../actions/following_actions';

const FollowingMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success;
  let error = (e) => console.log(e);

  switch (action.type) {
    case CREATE_FOLLOW_RELATIONSHIP:
      success = (user) => dispatch(receiveUserFollowed(user));
      createFollowRelationship(action.user, success, error);
      return next(action);

    case DELETE_FOLLOW_RELATIONSHIP:
      success = (user) => dispatch(removeFollowRelationship(user));
      deleteFollowRelationship((action.user).id, success, error);
      return next(action);

    default:
      next(action);
  }
};

export default FollowingMiddleware;
