json.array! photos do |photo|
  json.partial! "api/photos/photo.json.jbuilder", photo: photo
end
