class UserDrink < ApplicationRecord
  belongs_to :drinks
  belongs_to :users
end
