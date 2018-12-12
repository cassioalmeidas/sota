# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on 'turbolinks:load', ->
  rootUrl = $('#papers-datatable').data('root-url')
  $('#papers-datatable').dataTable
    processing: true
    serverSide: true
    ajax: $('#papers-datatable').data('source')
    pagingType: 'full_numbers'
    language:{
      url: rootUrl + '/datatable_i18n'
    }
    columns: [
      { data: 'id' },
      { data: 'title' }
    ]

# turbolinks cache fix
$(document).on 'turbolinks:before-cache', ->
  dataTable = $($.fn.dataTable.tables(true)).DataTable()
  if dataTable != null
    dataTable.clear()
    dataTable.destroy()
    return dataTable = null
  return    