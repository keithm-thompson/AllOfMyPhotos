export const createFollowRelationship = (userId, success, error) => (
  $.ajax({
    method: "POST",
    url: 'api/followings',
    data: { following: { followed_id: userId } },
    success,
    error
  })
);
export const deleteFollowRelationship = (id, success, error) => (
  $.ajax({
    method: "DELETE",
    url: `api/followings/${id}`,
    success,
    error
  })
);
