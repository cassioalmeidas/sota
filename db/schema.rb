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

ActiveRecord::Schema.define(version: 2019_01_19_133143) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotation_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "position"
  end

  create_table "annotations", force: :cascade do |t|
    t.bigint "paper_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "annotation_category_id"
    t.index ["annotation_category_id"], name: "index_annotations_on_annotation_category_id"
    t.index ["paper_id"], name: "index_annotations_on_paper_id"
  end

  create_table "file_resources", force: :cascade do |t|
    t.bigint "research_id"
    t.jsonb "file_data", null: false
    t.boolean "imported", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["research_id"], name: "index_file_resources_on_research_id"
  end

  create_table "papers", force: :cascade do |t|
    t.bigint "research_id"
    t.string "title", null: false
    t.text "abstract"
    t.string "keywords"
    t.string "authors"
    t.string "source"
    t.string "publication_year"
    t.string "type"
    t.string "journal"
    t.string "doi"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "citeproc"
    t.boolean "rejected", default: false, null: false
    t.index ["research_id"], name: "index_papers_on_research_id"
  end

  create_table "researches", force: :cascade do |t|
    t.bigint "user_id"
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_researches_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "annotations", "annotation_categories"
  add_foreign_key "annotations", "papers"
  add_foreign_key "file_resources", "researches"
  add_foreign_key "papers", "researches"
  add_foreign_key "researches", "users"
end
