class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients, :instructions, :img_url, :custom

end
