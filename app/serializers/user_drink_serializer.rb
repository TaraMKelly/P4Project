class UserDrinkSerializer < ActiveModel::Serializer
  attributes :id
  has_one :drinks
  has_one :users
end
