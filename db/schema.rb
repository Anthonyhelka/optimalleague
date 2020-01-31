# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_24_212350) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "leagues", force: :cascade do |t|
    t.string "name", null: false
    t.string "min_rank", null: false
    t.string "max_rank", null: false
  end

  create_table "players", force: :cascade do |t|
    t.bigint "league_id", null: false
    t.bigint "team_id", null: false
    t.string "name", null: false
    t.integer "kills"
    t.integer "deaths"
    t.integer "assists"
    t.integer "games_played"
    t.integer "ier"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["league_id"], name: "index_players_on_league_id"
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.bigint "league_id", null: false
    t.string "name", null: false
    t.string "tag", null: false
    t.string "group", null: false
    t.integer "wins", null: false
    t.integer "losses", null: false
    t.index ["league_id"], name: "index_teams_on_league_id"
  end

end
