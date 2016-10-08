json.properties do
  json.partial! "api/users/user", user: @user
end

json.following do
  @user.users_followed.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.photos do
    json.partial! "api/photos/index", photos: @user.photos
end
