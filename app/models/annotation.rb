class Annotation < ApplicationRecord
  belongs_to :paper
  belongs_to :annotation_category, -> { order(position: :asc) }
  validates :body, presence: true

  scope :ordered, -> { joins(:annotation_category).order('annotation_categories.position') }

  def category_name
    annotation_category.try(:name)
  end

  def category_name=(name)
    self.annotation_category = AnnotationCategory.find_or_create_by(name: name) if name.present?
  end
end
