class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.belongs_to :user, foreign_key: true
      t.string :description, null: false

      t.timestamps
    end
  end
end
