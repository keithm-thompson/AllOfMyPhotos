class Photo < ActiveRecord::Base
  validates :user_id, presence: true

  has_attached_file :image
  validates_attachment_presence :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
end
