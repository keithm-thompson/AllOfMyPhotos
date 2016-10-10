class Photo < ActiveRecord::Base
  validates :user_id, presence: true

  has_attached_file :image
  validates_attachment_presence :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user

  has_many :album_relationships,
    class_name: :AlbumPhoto,
    foreign_key: :photo_id

  has_many :albums,
    through: :album_relationships,
    source: :album
end
