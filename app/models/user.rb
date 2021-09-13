class User < ApplicationRecord
    has_many :user_drinks
    has_many :drinks, through: :user_drink
    
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
