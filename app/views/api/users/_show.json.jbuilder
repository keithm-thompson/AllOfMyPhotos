json.properties do
  json.partial! "api/users/user.json.jbuilder", user: user
end

json.following do
  user.users_followed.each do |users|
    json.set! users.id do
      json.partial! "api/users/user.json.jbuilder", user: users
    end
  end
end

json.followers do
  json.array! user.followers do |users|
    json.partial! "api/users/user.json.jbuilder", user: users
  end
end

json.photos do
    json.partial! "api/photos/index.json.jbuilder", photos: user.photos
end
