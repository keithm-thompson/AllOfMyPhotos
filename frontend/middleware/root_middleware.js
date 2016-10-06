import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FollowingMiddleware from './following_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FollowingMiddleware
);

export default RootMiddleware;
