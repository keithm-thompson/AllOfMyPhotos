export const CREATE_ALBUM = "CREATE_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const CREATE_ALBUM_PHOTO_RELATIONSHIP = "CREATE_ALBUM_PHOTO_RELATIONSHIP";
export const DELETE_ALBUM_PHOTO_RELATIONSHIP = "DELETE_ALBUM_PHOTO_RELATIONSHIP";
export const ADD_PHOTO_TO_ALBUM_IN_STATE = "ADD_PHOTO_TO_ALBUM_IN_STATE";
export const REMOVE_PHOTO_FROM_ALBUM_IN_STATE = "REMOVE_PHOTO_FROM_ALBUM_IN_STATE";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ONE_ALBUM = "RECEIVE_ONE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

export const createAlbum = (album) => ({
  type: CREATE_ALBUM,
  album
});

export const deleteAlbum = (albumId) => ({
  type: DELETE_ALBUM,
  albumId
});

export const createAlbumPhotoRelationship = (albumId, photoId) => ({
  type: CREATE_ALBUM_PHOTO_RELATIONSHIP,
  albumId,
  photoId
});

export const deleteAlbumPhotoRelationship = (albumId, photoId) => ({
  type: DELETE_ALBUM_PHOTO_RELATIONSHIP,
  albumId,
  photoId
});

export const addPhotoToAlbumInState = (albumId, photo) => ({
  type: ADD_PHOTO_TO_ALBUM_IN_STATE,
  albumId,
  photo
});

export const removePhotoFromAlbumInState = (albumId, photo) => ({
  type: REMOVE_PHOTO_FROM_ALBUM_IN_STATE,
  albumId,
  photo
});

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveOneAlbum = (album) => ({
  type: RECEIVE_ONE_ALBUM,
  album
});

export const removeAlbum = (album) => ({
  type: REMOVE_ALBUM,
  album
});
