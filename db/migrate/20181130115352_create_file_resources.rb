class CreateFileResources < ActiveRecord::Migration[5.2]
  def change
    create_table :file_resources do |t|
      t.belongs_to :research, foreign_key: true
      t.jsonb :file_data, null: false
      t.boolean :imported, default: false
      
      t.timestamps
    end
  end
end
