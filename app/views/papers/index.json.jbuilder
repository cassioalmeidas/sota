json.set! :data do
  json.array! @papers do |paper|
    json.partial! 'papers/paper', paper: paper
    json.url  "
              #{link_to 'Show', paper }
              #{link_to 'Edit', edit_paper_path(paper)}
              #{link_to 'Destroy', paper, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end