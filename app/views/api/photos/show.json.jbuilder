json.partial! "api/photos/photo", photo: @photo
json.uploadedOn @photo.created_at
json.tags do
  json.array! @photo.tags do |tag|
    json.tag_name tag.tag_name
  end
end
