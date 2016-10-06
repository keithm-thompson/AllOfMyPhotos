export const RECEIVE_USER_FOLLOWS = "RECEIVE_USER_FOLLOWS";
export const RECEIVE_USER_FOLLOWED = "RECEIVE_USER_FOLLOWED";
export const CREATE_FOLLOW_RELATIONSHIP = "CREATE_FOLLOW_RELATIONSHIP";
export const REMOVE_FOLLOW_RELATIONSHIP = "REMOVE_FOLLOW_RELATIONSHIP";
export const DELETE_FOLLOW_RELATIONSHIP = "DELETE_FOLLOW_RELATIONSHIP";


export const receiveUserFollows = (users) => ({
  type: RECEIVE_USER_FOLLOWS,
  users
});
export const receiveUserFollowed = (user) => ({
  type: RECEIVE_USER_FOLLOWED,
  user
});

export const createFollowRelationship = (userId) => ({
  type: CREATE_FOLLOW_RELATIONSHIP,
  userId
});

export const removeFollowRelationship = (user) => ({
  type: REMOVE_FOLLOW_RELATIONSHIP,
  user
});

export const deleteFollowRelationship = (userId) => ({
  type: DELETE_FOLLOW_RELATIONSHIP,
  userId
});
