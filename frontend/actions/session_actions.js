export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signin = (user, callback) => ({
  type: SIGNIN,
  user,
  callback
});

export const signout = (callback) => ({
  type: SIGNOUT,
  callback
});

export const signup = (user, callback) => ({
  type: SIGNUP,
  user,
  callback
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
