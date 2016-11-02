rendered_photos = {}

json.tagged_photos do
  json.array! @photos do |photo|
    json.partial! "api/photos/photo", photo: photo
    json.time_since_uploaded time_ago_in_words(photo.created_at)
    json.user do
      json.partial! "api/users/user", user: photo.user
    end
    rendered_photos[photo.id] = true
  end
end

json.similar_photos do
  json.array! @similar_tags do |similar_tag|
    similar_tag.photos.each do |photo|
      unless rendered_photos[photo.id]
        json.partial! "api/photos/photo", photo: photo
        json.time_since_uploaded time_ago_in_words(photo.created_at)
        json.user do
          json.partial! "api/users/user", user: photo.user
        end
        rendered_photos[photo.id] = true
      end
    end
  end
end
