json.set! :data do
  json.array! @researches do |research|
    json.partial! 'researches/research', research: research
    json.url  "
              #{link_to 'Show', research }
              #{link_to 'Edit', edit_research_path(research)}
              #{link_to 'Destroy', research, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end