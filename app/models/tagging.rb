class Tagging < ActiveRecord::Base
  validates :tag_id, :photo_id, presence: true
  validates :tag_id, uniqueness: { scope: :photo_id }

  belongs_to :photo

  belongs_to :tag
end
