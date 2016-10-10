export const createAlbum = (album, success, error) => (
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data: { album },
    success,
    error
  })
);

export const deleteAlbum = (albumId, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${albumID}`,
    success,
    error
  })
);

export const addPhotoToAlbum = (albumId, photoId, success, error) => (
  $.ajax({
    method: 'POST',
    url: `api/albums/${albumId}/add_photo/${photoId}`,
    success,
    error
  })
);

export const removePhotoFromAlbum = (albumId, photoId, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${albumId}/remove_photo/${photoId}`,
    success,
    error
  })
);
