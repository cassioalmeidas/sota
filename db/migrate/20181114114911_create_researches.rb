class CreateResearches < ActiveRecord::Migration[5.2]
  def change
    create_table :researches do |t|
      t.belongs_to :user, foreign_key: true
      t.string :description, null: false

      t.timestamps
    end
  end
end
