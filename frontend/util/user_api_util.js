export const fetchUser = (userId, success, error) => {

  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`,
    success: (data) => {
      success(data);
    },
    error
  });
};
