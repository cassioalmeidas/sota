$(document).on 'turbolinks:load', ->
  $('#annotations_category').sortable
    update: (e, ui) -> 
      Rails.ajax
        url: $(this).data('update-url')
        type: 'post'
        data: $(this).sortable('serialize')
    axis: 'y'
    hande: '.handle'
  return