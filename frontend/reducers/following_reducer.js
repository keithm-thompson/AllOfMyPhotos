import {
  RECEIVE_USER_FOLLOWS,
  RECEIVE_USER_FOLLOWED,
  REMOVE_FOLLOW_RELATIONSHIP
} from '../actions/following_actions';

import merge from 'lodash/merge';

const FollowingReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_USER_FOLLOWED:
      return merge({}, state, action.user);

    case RECEIVE_USER_FOLLOWS:
      return merge({}, state, action.users);

    case REMOVE_FOLLOW_RELATIONSHIP:
      let dupped_state = merge({}, state);
      delete dupped_state.action[(action.user).id];
      return dupped_state;

    default:
      return state;
  }
};

export default FollowingReducer;

User.find_by_sql(<<-SQL)
  SELECT
    users.*
  FROM
    users
  ORDER BY
    case
      when LENGTH(substring(users.username from '%keithaa%' for '#')) < LENGTH(substring('%keithaa%'from users.username  for '#')) then LENGTH(substring('%keithaa%'from users.username  for '#'))
      else LENGTH(substring(users.username from '%keithaa%' for '#'))
SQL

User.find_by_sql([<<-SQL, 'keith'])
SELECT
 users.*
FROM
 users
ORDER BY
 (substring(users.username from ?))
SQL
