export const uploadPhoto = (photo, success, error) => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: photo ,
    dataType: "json",
    contentType: false,
    processData: false,
    success,
    error
  })
);

export const deletePhoto = (photoId, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${photoId}`,
    data: { photo: photoId },
    success,
    error
  })
);

export const fetchInitialFeedPhotos = (success, error) => (
  $.ajax({
    method: 'GET',
    url: 'api/initial_feed',
    success,
    error
  })
);

export const fetchFullFeedPhotos = (success, error) => (
  $.ajax({
    method: 'GET',
    url: 'api/full_feed',
    success,
    error
  })
);

export const fetchUserPhotos = (userId, success, error) => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${userId}`,
    success,
    error
  })
);
