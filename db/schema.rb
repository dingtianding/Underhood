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

ActiveRecord::Schema.define(version: 2022_11_03_232827) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "portfolio_transactions", force: :cascade do |t|
    t.string "symbol", null: false
    t.integer "owner_id"
    t.boolean "is_purchase"
    t.float "quantity"
    t.float "transaction_price"
    t.float "current_total", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_portfolio_transactions_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest"
    t.string "session_token"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "buying_power", default: "0.0"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "watchlist_assets", force: :cascade do |t|
    t.integer "watchlist_id"
    t.string "symbol"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["watchlist_id", "symbol"], name: "index_watchlist_assets_on_watchlist_id_and_symbol", unique: true
    t.index ["watchlist_id"], name: "index_watchlist_assets_on_watchlist_id"
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.string "icon", default: "&#128161;", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_watchlists_on_name"
    t.index ["user_id", "name"], name: "index_watchlists_on_user_id_and_name", unique: true
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

end
