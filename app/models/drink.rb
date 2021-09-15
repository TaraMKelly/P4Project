class Drink < ApplicationRecord
    has_many :user_drinks, dependent: :destroy
    has_many :users, through: :user_drinks

    validates :name, presence: true, uniqueness: true
    validates :ingredients, presence: true
    validates :instructions, presence: true
end
