json.array! @users do |user|
  json.partial! "api/users/user", user: user

  json.isFollowing Following.find_by(follower_id: current_user.id, followed_id: user.id) ? true : false
end
