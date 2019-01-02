class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.belongs_to :paper, foreign_key: true, null: false
      t.text :body, null: false
      
      t.timestamps
    end
  end
end
