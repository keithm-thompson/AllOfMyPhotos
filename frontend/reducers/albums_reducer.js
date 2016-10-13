import {
  RECEIVE_ALBUMS,
  RECEIVE_ONE_ALBUM,
  REMOVE_ALBUM,
  ADD_PHOTO_TO_ALBUM_IN_STATE,
  REMOVE_PHOTO_FROM_ALBUM_IN_STATE
} from '../actions/album_actions';

import merge from 'lodash/merge';

const AlbumsReducer = (state = [], action) => {
  let album, searchId, index;
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return [...action.albums];

    case RECEIVE_ONE_ALBUM:
      return [
        action.album,
        ...state
      ];

    case REMOVE_ALBUM:
      const filteredAlbums = state.filter((album) => {
        return album.id !== action.album.id;
      });
      return filteredAlbums;

    case ADD_PHOTO_TO_ALBUM_IN_STATE:
      searchId = action.albumId
      index = -1;
      album;
      for(let i = 0; i < state.length ; i++) {
        if (state[i].id === searchId) {
          index = i;
          album = merge({}, state[i]);
          break;
        }
      }
      album.photos.push(action.photo)
      return [
        ...state.slice(0, index),
        album,
        ...state.slice(index + 1)
      ];
    case REMOVE_PHOTO_FROM_ALBUM_IN_STATE:
      searchId = action.albumId
      index = -1;
      album;
      for(let i = 0; i < state.length ; i++) {
        if (state[i].id === searchId) {
          index = i;
          album = merge({}, state[i]);
          break;
        }
      }
      let albumPhotosFiltered = album.photos.filter((photo) => {
        return photo.id !== action.photo.id
      });
      album.photos = albumPhotosFiltered;
      return [
        ...state.slice(0,i),
        album,
        ...state.slice(i+1)
      ];

    default:
      return state;
  }
};

export default AlbumsReducer;
