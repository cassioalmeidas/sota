# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on 'turbolinks:load', ->
  $('#researches-datatable').dataTable
    processing: true
    serverSide: true
    ajax: $('#researches-datatable').data('source')
    pagingType: 'full_numbers'
    columns: [
      { data: 'description' }
      { data: 'created_at' }
      { data: 'dt_actions' }
    ]

# turbolinks cache fix
$(document).on 'turbolinks:before-cache', ->
  dataTable = $($.fn.dataTable.tables(true)).DataTable()
  if dataTable != null
    dataTable.clear()
    dataTable.destroy()
    return dataTable = null
  return    