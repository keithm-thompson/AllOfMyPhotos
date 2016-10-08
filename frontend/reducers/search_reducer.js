import {
  RECEIVE_USERS_SEARCH_RESULTS,
  RECEIVE_PHOTOS_SEARCH_RESULTS
} from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS_SEARCH_RESULTS:
      return [
      ...action.users
    ];

    case RECEIVE_PHOTOS_SEARCH_RESULTS:
      return [
        ...action.photos
      ];

    default:
      return state;
  }
};

export default SearchReducer;
