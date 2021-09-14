class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :name
      t.text :ingredients
      t.text :instructions
      t.string :img_url
      t.boolean :custom

      t.timestamps
    end
  end
end
