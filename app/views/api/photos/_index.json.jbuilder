json.array! photos do |photo|
  json.partial! "api/photos/photo.json.jbuilder", photo: photo
  json.uploadedOn photo.created_at.to_time.strftime('%B %e at %l:%M %p')
  json.tags do
    json.array! photo.tags do |tag|
      json.tag_id tag.id
      json.tag_name tag.tag_name
    end
  end
end
