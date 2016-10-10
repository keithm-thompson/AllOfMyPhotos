import {
  CREATE_ALBUM,
  DELETE_ALBUM,
  CREATE_ALBUM_PHOTO_RELATIONSHIP,
  DELETE_ALBUM_PHOTO_RELATIONSHIP,
  receiveAlbum,
  removeAlbum,
  addPhotoToAlbumInState,
  removePhotoToAlbumInState
} from '../actions/album_actions';

import {
  createAlbum,
  deleteAlbum,
  addPhotoToAlbum,
  removePhotoFromAlbum
} from '../util/album_api_util';

const AlbumsMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  let success;
  let error = (e) => console.log(e);

  switch (action.type) {
    case CREATE_ALBUM:
      success = (album) => dispatch(receiveAlbum(album));
      createAlbum(action.album, success, error);
      return next(action);

    case DELETE_ALBUM:
      success = (album) => dispatch(removeAlbum(album));
      deleteAlbum(action.albumId, success, error);
      return next(action);

    case CREATE_ALBUM_PHOTO_RELATIONSHIP:
      success = (data) => dispatch(addPhotoToAlbumInState(data.albumId, data.photo));

      addPhotoToAlbum(action.albumId, action.photoId, success, error);
      return next(action);

    case DELETE_ALBUM_PHOTO_RELATIONSHIP:
      success = (albumId, photo) => dispatch(removePhotoFromAlbumInState(albumId, photo));
      removePhotoFromAlbum(albumId, photoId, success, error);
      return next(action);
    default:
      return next(action);

  }
}

export default AlbumsMiddleware;
