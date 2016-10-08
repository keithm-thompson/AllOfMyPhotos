const fetchUser = (userId, success, error) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`,
    success,
    error
  })
);
