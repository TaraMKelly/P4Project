class CreateUserDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_drinks do |t|
      t.belongs_to :drinks, null: false, foreign_key: true
      t.belongs_to :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
