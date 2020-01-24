class CreateTeam < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.belongs_to :league, null: false

      t.string :name, null: false, unique: true
      t.string :tag, null: false, unique: true
      t.string :group, null: false
      t.integer :wins, null: false
      t.integer :losses, null: false
    end
  end
end
