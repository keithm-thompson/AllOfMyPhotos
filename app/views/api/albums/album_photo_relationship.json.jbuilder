json.albumId @album_photo.album_id

json.photo do
  json.partial! "api/photos/photo.json.jbuilder", photo: @album_photo.photo
end
