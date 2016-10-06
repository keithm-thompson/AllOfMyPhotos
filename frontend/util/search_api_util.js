export const fetchUserSearchResults = (username, success, error) => (
  $.ajax ({
    url: `/api/search/?username=${username}`,
    method: 'GET',
    success,
    error
  })
);

// export const fetchPhotoSearchResults = (tag, success, error) => (
//   $.ajax ({
//     url: `/api/search/photos/?tag=${tag}`,
//     method: 'GET',
//     success,
//     error
//   })
// );
