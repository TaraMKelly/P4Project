class Drink < ApplicationRecord
    has_many :user_drinks, dependent: :destroy
    has_many :users, through: :user_drink

    validates :name, presence: true, uniqueness: true, length: { in: 1..30 }
    validates :ingredients, presence: true, length: { in: 1..400 }
    validates :instructions, presence: true, length: { in: 1..400 }
    validates :img_url, presence: true, uniqueness: true
end
