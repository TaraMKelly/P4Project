class Drink < ApplicationRecord
    has_many :user_drinks
    has_many :users, through: :user_drink

    validates :name, presence: true, uniqueness: true
    validates :ingredients, presence: true
    validates :instructions, presence: true
end
