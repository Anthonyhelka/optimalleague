class CreateGroup < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.belongs_to :league, null: false

      t.string :name, null: false
    end
  end
end
