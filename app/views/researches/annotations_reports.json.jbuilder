json.research @research.description
json.annotations @annotations do |cat, annotations|
  json.category cat
  json.annotation_items annotations do |annotation|
    json.paper annotation.paper.title
    json.doi annotation.paper.doi
    json.body sanitize(annotation.body, tags: []) + ' ' + annotation.citation
    json.keywords annotation.paper.keywords
  end
end
json.bibliography @bibliography do |bibliography|
  json.item bibliography
end