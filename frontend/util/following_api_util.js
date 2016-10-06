export const createFollowRelationship = (user, success, error) => (
  $.ajax({
    method: "POST",
    url: 'api/followings',
    data: { following: user },
    success,
    error
  })
);
export const deleteFollowRelationship = (id, success, error) => (
  $.ajax({
    method: "POST",
    url: `api/followings/${id}`,
    success,
    error
  })
);
