class UserDrinkSerializer < ActiveModel::Serializer
  attributes :id
  has_one :drink
  has_one :user
end
