require 'citeproc'
require 'csl/styles'

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

  def citation
    cp = CiteProc::Processor.new style: 'associacao-brasileira-de-normas-tecnicas-eceme', format: 'text'
    if paper.citeproc
      cp.import [paper.citeproc]
      return cp.render :citation, id: paper.citeproc['id']
    end
    return nil
  end

  def bibliography
    if paper.citeproc
      cp = CiteProc::Processor.new style: 'associacao-brasileira-de-normas-tecnicas-ipea', format: 'text'
      cp.import [paper.citeproc]
      return cp.render :bibliography, id: paper.citeproc['id']
    end 
    return nil
  end
end
