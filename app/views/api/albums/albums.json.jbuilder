json.array! @albums do |album|
  json.partial! "api/albums/show", album: album
end
