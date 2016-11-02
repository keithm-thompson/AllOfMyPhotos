import {
  RECEIVE_USERS_SEARCH_RESULTS,
  RECEIVE_PHOTOS_SEARCH_RESULTS,
  CLEAR_SEARCH
} from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS_SEARCH_RESULTS:
      return [
      ...action.users
    ];

    case RECEIVE_PHOTOS_SEARCH_RESULTS:
      return [
        [...(action.photos.tagged_photos)],
        [...(action.photos.similar_photos)]
      ];

    case CLEAR_SEARCH:
      return [];

    default:
      return state;
  }
};

export default SearchReducer;
