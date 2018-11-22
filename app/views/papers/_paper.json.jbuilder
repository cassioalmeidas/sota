json.extract! paper, :id, :research_id, :title, :abstract, :keywords, :authors, :source, :publication_year, :type, :journal, :doi, :url, :created_at, :updated_at
json.url paper_url(paper, format: :json)
