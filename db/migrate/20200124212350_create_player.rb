class CreatePlayer < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.belongs_to :team, null: false

      t.string :name, null: false, unique: true
      t.string :starter, null: false
    end
  end
end
