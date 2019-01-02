class Paper < ApplicationRecord
  belongs_to :research
  has_one :annotation
  self.per_page = 1

  scope :unannotated, -> do 
    includes(:annotation).where(annotations: { paper_id: nil })
  end

  scope :annotated, -> do 
    joins(:annotation)
  end
end
