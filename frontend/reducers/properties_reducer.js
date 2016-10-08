import {
  RECEIVE_USER_PROPERTIES
} from '../actions/user_actions';

const PropertiesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_PROPERTIES:
      return action.properties;
    default:
      return state;
  }
};

export default PropertiesReducer;
