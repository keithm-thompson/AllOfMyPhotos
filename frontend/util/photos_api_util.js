export const uploadPhoto = (photo, success, error) => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: { photo },
    success,
    error
  })
);

export const deletePhoto = (photoId, success, error) => (
  $.ajax({
    method: 'POST',
    url: `api/photos/${photoId}`,
    data: { photo },
    success,
    error
  })
);

export const fetchFeedPhotos = (success, error) => (
  $.ajax({
    method: 'GET',
    url: 'api/photos/feed',
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
