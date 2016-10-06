user.users_followed.each do |users|
  json.set! users.id do
    json.partial! "api/users/user.json.jbuilder", user: users
  end
end
