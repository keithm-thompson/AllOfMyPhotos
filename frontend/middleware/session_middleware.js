import { LOGIN,
        LOGOUT,
        SIGNUP,
        receiveCurrentUser,
        receiveErrors
} from '../actions/session_actions';

import {
  login,
  logout,
  signup
} from '../util/session_api_util.js';

export default ({ getState, dispatch }) => (next) => (action) => {
  let success = (user) => dispatch(receiveCurrentUser(user));
  let error = (errors) => dispatch(receiveErrors(errors));

  switch (action.type) {
    case LOGIN:
      login(action.user, success, error);
      return next(action);

    case SIGNUP:
      signup(action.user, success, error);
      return next(action);

    case LOGOUT:
      const complete = () => next(action);
      logout(complete);
      break;
    default:
      return next(action);
  }
};
