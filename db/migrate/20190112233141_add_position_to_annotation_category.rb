class AddPositionToAnnotationCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :annotation_categories, :position, :integer
  end
end
