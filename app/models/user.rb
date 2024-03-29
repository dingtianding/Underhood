class User < ApplicationRecord
    attr_reader :password
    validates :first_name, :last_name, :email, :password_digest, :session_token, :buying_power, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 1, allow_nil: true }

    after_initialize :ensure_session_token

    has_many :transactions,
    foreign_key: :owner_id,
    class_name: "PortfolioTransaction"
  
    has_many :watchlists
  
    has_many :watchlist_assets, through: :watchlists
  
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil if user.nil?
      user.is_password?(password) ? user : nil
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64
      self.save
      self.session_token
    end
  
    private 
  
    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end
  
  end