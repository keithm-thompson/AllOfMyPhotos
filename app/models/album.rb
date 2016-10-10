class Album < ActiveRecord::Base
  validates :title, :user_id, presence: true

  has_many :photos,
    through: :photo_relationships,
    source: :photo

  has_many :photo_relationships,
    class_name: :AlbumPhoto,
    foreign_key: :album_id

  belongs_to :user
end
