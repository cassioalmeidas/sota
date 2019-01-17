$(document).on 'trix-initialize', (e) ->
	trix = e.target
	toolBar = trix.toolbarElement
	pasteUrl = $('#annotation_body').data('pasteurl')

	button = document.createElement('button')
	button.setAttribute 'type', 'button'
	button.setAttribute 'class', 'trix-button'
	button.setAttribute 'data-trix-action', 'x-paste-abs-translated'
	button.setAttribute 'title', I18n.t('researches.annotate_papers.paste_abs_translated')
	button.setAttribute 'tabindex', '-1'
	button.innerText = I18n.t('researches.annotate_papers.paste_abs_translated')
	# Attachment of the button to the toolBar
	copyButton = toolBar.querySelector('.trix-button-group.trix-button-group--block-tools').appendChild(button)
	# When the button is clicked
	copyButton.addEventListener 'click', ->
	  $.get pasteUrl
	  return
	return
	return