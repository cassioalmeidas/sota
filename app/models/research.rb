class Research < ApplicationRecord
  belongs_to :user
  validates :description, :user_id, presence: true
  has_many :file_resources, dependent: :destroy
  has_many :papers, dependent: :destroy

  def import_papers(file)
    bibtex = BibTeX.open(file)
    bibtex.each do |p|
      if p.try(:title) 
        paper = self.papers.build
        paper.title = p.title
        paper.abstract = p.try(:abstract)
        paper.keywords = p.try(:keywords)
        paper.authors = p.author.to_s
        paper.source = p.try(:source)
        paper.publication_year = p.try(:year)
        paper.journal = p.try(:publisher)
        paper.doi = p.try(:doi)
        paper.url = p.try(:url)
        paper.save
      end
    end
  end  
end
