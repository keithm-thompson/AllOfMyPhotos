import { SIGNIN,
        SIGNOUT,
        SIGNUP,
        receiveCurrentUser,
        receiveErrors
} from '../actions/session_actions';

import {
  signin,
  signout,
  signup
} from '../util/session_api_util.js';

import {
  receiveUserFollows
} from '../actions/following_actions';

const SessionMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success = (user) => {
                            dispatch(receiveUserFollows(user.following));
                            dispatch(receiveCurrentUser(user.properties));
                            action.callback();
                          };

  let error = (errors) => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case SIGNIN:
      signin(action.user, success, error);
      return next(action);

    case SIGNUP:
      signup(action.user, success, error);
      return next(action);

    case SIGNOUT:
      const complete = () => {
        action.callback();
        next(action);
        action.callback();
      };
      signout(complete);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
