class AnnotationCategory < ApplicationRecord
  has_many :annotations
  acts_as_list
end
