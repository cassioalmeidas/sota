class CreatePapers < ActiveRecord::Migration[5.2]
  def change
    create_table :papers do |t|
      t.belongs_to :research, foreign_key: true
      t.string :title, null: false
      t.text :abstract
      t.string :keywords
      t.string :authors
      t.string :source
      t.string :publication_year
      t.string :type
      t.string :journal
      t.string :doi
      t.string :url

      t.timestamps
    end
  end
end
