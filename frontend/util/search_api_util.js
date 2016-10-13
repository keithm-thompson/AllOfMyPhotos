export const fetchUserSearchResults = (username, success, error) => (
  $.ajax ({
    url: `/api/search/?username=${username}`,
    method: 'GET',
    success,
    error
  })
);

export const fetchPhotoSearchResults = (tagName, success, error) => (
  $.ajax ({
    url: `/api/search/photos/?tag_name=${tagName}`,
    method: 'GET',
    success,
    error
  })
);
