json.partial! "api/users/user", user: @user

json.following do
  @user.users_followed.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end
