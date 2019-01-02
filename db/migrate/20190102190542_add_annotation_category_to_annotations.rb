class AddAnnotationCategoryToAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_reference :annotations, :annotation_category, foreign_key: true
  end
end
