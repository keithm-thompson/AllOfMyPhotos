import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const _DEFAULT_STATE = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _DEFAULT_STATE, action) => {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser, errors: [] } );

    case RECEIVE_ERRORS:
      return merge({}, state, { currentUser: null, errors: action.errors });

    case LOGOUT:
      return _DEFAULT_STATE;

    case "CLEAR_ERRORS":
      return _DEFAULT_STATE;
    default:
      return state;
  }

};

export default SessionReducer;
