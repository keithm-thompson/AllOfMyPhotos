import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FollowingMiddleware from './following_middleware';
import SearchMiddleware from './search_middleware';
import PhotosMiddleware from './photos_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FollowingMiddleware,
  SearchMiddleware,
  PhotosMiddleware,
  UserMiddleware
);

export default RootMiddleware;
