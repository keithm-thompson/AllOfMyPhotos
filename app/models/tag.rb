class Tag < ActiveRecord::Base
  validates :tag_name, uniqueness: true, presence: true

  has_many :photos,
    through: :taggings,
    source: :photo

  has_many :taggings
end
