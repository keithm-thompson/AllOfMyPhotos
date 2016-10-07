json.set! @photo.id do
  json.id @photo.id
  json.image_url asset_path(@photo.image.url)
end
