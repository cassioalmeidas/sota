class Paper < ApplicationRecord
  belongs_to :research
  has_many :annotations, dependent: :destroy
  self.per_page = 1

  scope :unannotated, -> do 
    includes(:annotations).where(annotations: { paper_id: nil })
  end

  scope :annotated, -> do 
    joins(:annotations)
  end
end
