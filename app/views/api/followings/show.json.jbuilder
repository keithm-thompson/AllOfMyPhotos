json.set! @following.followed_id do
  json.partial! "api/users/user", user: User.find(@following.followed_id)
end
