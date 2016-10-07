json.partial! "api/users/user.json.jbuilder", user: user

json.following do
  user.users_followed.each do |users|
    json.set! user.id do
      json.partial! "api/users/user.json.jbuilder", user: users
    end
  end
end
