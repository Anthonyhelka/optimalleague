class CreateLeague < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name, null: false, unique: true
      t.string :min_rank, null: false
      t.string :max_rank, null: false
    end
  end
end
