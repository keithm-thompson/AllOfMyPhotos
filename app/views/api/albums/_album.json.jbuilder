json.id album.id
json.title album.title
json.description album.description

json.photos do
  json.partial! "api/photos/index.json.jbuilder", photos: album.photos
end
