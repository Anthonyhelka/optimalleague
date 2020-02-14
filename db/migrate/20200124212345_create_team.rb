class CreateTeam < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.belongs_to :league, null: false

      t.string :name, null: false
      t.string :tag, null: false
      t.string :group, null: false
      t.integer :wins, null: false
      t.integer :losses, null: false
      t.string :roster,  array: true, default: []
    end
  end
end
