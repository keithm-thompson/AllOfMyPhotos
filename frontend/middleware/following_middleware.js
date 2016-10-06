import {
  createFollowRelationship,
  deleteFollowRelationship
} from '../util/following_api_util';

import {
  receiveUserFollows,
  receiveUserFollowed,
  removeFollowRelationship,
  CREATE_FOLLOW_RELATIONSHIP,
  DELETE_FOLLOW_RELATIONSHIP
} from '../actions/following_actions';

const FollowingMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success;
  let error = (e) => console.log(e);

  switch (action.type) {
    case CREATE_FOLLOW_RELATIONSHIP:
      success = (user) => dispatch(receiveUserFollowed(user));
      createFollowRelationship(action.userId, success, error);
      return next(action);

    case DELETE_FOLLOW_RELATIONSHIP:
      success = (user) => dispatch(removeFollowRelationship(user));
      deleteFollowRelationship(action.userId, success, error);
      return next(action);

    default:
      next(action);
  }
};

export default FollowingMiddleware;
