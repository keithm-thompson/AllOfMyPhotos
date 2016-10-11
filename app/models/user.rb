class User < ActiveRecord::Base
	attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	has_attached_file :image, default_url: "inspire-me-five.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  has_many :photos, -> { order(created_at: :desc) }

  has_many :albums

  has_many :followers_join,
    class_name: :Following,
    foreign_key: :followed_id

  has_many :followers,
    through: :followers_join,
    source: :follower

  has_many :user_follows,
    class_name: :Following,
    foreign_key: :follower_id

  has_many :users_followed,
    through: :user_follows,
    source: :followed


	def password= (password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
