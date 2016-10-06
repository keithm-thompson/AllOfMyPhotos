import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FollowingMiddleware from './following_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FollowingMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
