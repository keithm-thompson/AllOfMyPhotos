export const RECEIVE_USER_PROPERTIES = "RECEIVE_USER_PROPERTIES";
export const FETCH_USER = "FETCH_USER";

export const receiveUserProperties = (properties) => ({
  type: RECEIVE_USER_PROPERTIES,
  properties
});

export const fetchUser = (userId) => ({
  type: FETCH_USER,
  userId
});
