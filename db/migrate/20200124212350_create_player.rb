class CreatePlayer < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.belongs_to :team, null: false

      t.string :name, null: false, unique: true
      t.integer :kills

      t.timestamps
    end
  end
end
