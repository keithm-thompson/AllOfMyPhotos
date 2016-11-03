json.array! @photos do |photo|
  json.partial! "api/photos/photo", photo: photo
  json.time_since_uploaded time_ago_in_words(photo.created_at)
  json.user do
    json.partial! "api/users/user", user: photo.user
  end
end
