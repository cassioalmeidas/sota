@annotations.each do |cat, annotations|
  json.research @research.description
  json.category cat
  json.annotations annotations do |annotation|
    json.paper annotation.paper.title
    json.doi annotation.paper.doi
    json.body sanitize(annotation.body, tags: [])
  end
end
