import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FollowingMiddleware from './following_middleware';
import SearchMiddleware from './search_middleware';
import PhotosMiddleware from './photos_middleware';
import UserMiddleware from './user_middleware';
import AlbumsMiddleware from './albums_middleware';
// import { createLogger } from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FollowingMiddleware,
  SearchMiddleware,
  PhotosMiddleware,
  UserMiddleware,
  AlbumsMiddleware
);

export default RootMiddleware;
