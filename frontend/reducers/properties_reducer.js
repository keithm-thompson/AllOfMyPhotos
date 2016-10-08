import {
  RECEIVE_USER_PROPERTIES
} from '../actions/user_actions';

import merge from 'lodash/merge';

const PropertiesReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_USER_PROPERTIES:
      return merge({}, action.properties);
    default:
      return state;
  }
};

export default PropertiesReducer;
