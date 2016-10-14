import {
  RECEIVE_ALBUMS,
  RECEIVE_ONE_ALBUM,
  RECEIVE_UPDATED_ALBUM,
  REMOVE_ALBUM,
  ADD_PHOTO_TO_ALBUM_IN_STATE,
  REMOVE_PHOTO_FROM_ALBUM_IN_STATE
} from '../actions/album_actions';

import merge from 'lodash/merge';

const AlbumsReducer = (state = [], action) => {

  let albumToAddPhotoTo, searchId, index;
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return [...action.albums];

    case RECEIVE_ONE_ALBUM:
      return [
        action.album,
        ...state
      ];

    case RECEIVE_UPDATED_ALBUM:
      searchId = action.album.id;
      let updatedAlbum;
      index = -1;
      for(let i = 0; i < state.length ; i++) {
        if (state[i].id === searchId) {
          index = i;
          updatedAlbum = merge({}, state[i]);
          break;
        }
      }
      return [
        ...state.slice(0, index),
        updatedAlbum,
        ...state.slice(index + 1)
      ];


    case REMOVE_ALBUM:
      const filteredAlbums = state.filter((album) => {
        return album.id !== action.album.id;
      });
      return filteredAlbums;

    case ADD_PHOTO_TO_ALBUM_IN_STATE:
      searchId = action.albumId;
      index = -1;
      for(let i = 0; i < state.length ; i++) {
        if (state[i].id === searchId) {
          index = i;
          albumToAddPhotoTo = merge({}, state[i]);
          break;
        }
      }
      albumToAddPhotoTo.photos.push(action.photo);
      return [
        ...state.slice(0, index),
        albumToAddPhotoTo,
        ...state.slice(index + 1)
      ];
    case REMOVE_PHOTO_FROM_ALBUM_IN_STATE:
      searchId = action.albumId;
      index = -1;
      for(let i = 0; i < state.length ; i++) {
        if (state[i].id === searchId) {
          index = i;
          albumToAddPhotoTo = merge({}, state[i]);
          break;
        }
      }
      let albumPhotosFiltered = albumToAddPhotoTo.photos.filter((photo) => {
        return photo.id !== action.photo.id;
      });

      albumToAddPhotoTo.photos = albumPhotosFiltered;
      return [
        ...state.slice(0,index),
        albumToAddPhotoTo,
        ...state.slice(index+1)
      ];

    default:
      return state;
  }
};

export default AlbumsReducer;
