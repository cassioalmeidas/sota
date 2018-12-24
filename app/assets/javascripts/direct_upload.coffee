# This code uses:
#
# * babel-polyfill (https://babeljs.io/docs/usage/polyfill/)
# * whatwg-fetch (https://github.github.io/fetch/)
# * uppy (https://uppy.io)
  
$(document).on 'turbolinks:load', ->

  fileUpload = (fileInput) ->
    fileInput.style.display = 'none'
    # uppy will add its own file input
    uppy = Uppy.Core(
      id: fileInput.id
      autoProceed: true
      allowMultipleUploads: false
      restrictions: allowedFileTypes: fileInput.accept.split(',')
      locale: strings: I18n.t('uppy.core')).use(Uppy.FileInput,
      target: fileInput.parentNode
      locale: strings: I18n.t('uppy.fileinput'))
      .use(Uppy.Informer, target: fileInput.parentNode)
      .use(Uppy.StatusBar,
      target: '.UppyInput-Progress'
      hideUploadButton: true
      hideAfterFinish: false
      locale: strings: I18n.t('uppy.statusbar')
    )
    if fileInput.dataset.uploadServer == 's3'
      uppy.use Uppy.AwsS3, serverUrl: '/'
    else
      uppy.use Uppy.XHRUpload,
        endpoint: '/upload'
        fieldName: 'file'
    uppy.on 'upload-success', (file, data) ->
      `var uploadedFileData`
      if fileInput.dataset.uploadServer == 's3'
        # construct uploaded file data in the format that Shrine expects
        uploadedFileData = JSON.stringify(
          id: file.meta['key'].match(/^cache\/(.+)/)[1]
          storage: 'cache'
          metadata:
            size: file.size
            filename: file.name
            mime_type: file.type)
      else
        uploadedFileData = JSON.stringify(data)
      # set hidden field value to the uploaded file data so that it's submitted with the form as the attachment
      hiddenInput = document.getElementById(fileInput.dataset.uploadResultElement)
      hiddenInput.value = uploadedFileData
      return
    uppy

  document.querySelectorAll('input[type=file]').forEach (fileInput) ->
    if fileInput.multiple
      fileInput.addEventListener 'change', (event) ->
        Array.from(fileInput.files).forEach (file) ->
          # create a new copy of the resource for the selected file
          template = document.getElementById(fileInput.dataset.template)
          uploadList = document.getElementById(fileInput.dataset.uploadList)
          uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
          uploadList.insertAdjacentHTML 'beforeend', template.innerHTML.replace(/{{index}}/g, uniqueId)
          # trigger file upload on the new resource
          singleFileInput = uploadList.lastElementChild.querySelector('input[type=file]')
          uppy = fileUpload(singleFileInput)
          uppy.addFile
            name: file.name
            type: file.type
            data: file
          return
        # remove selected files
        fileInput.value = ''
        return
    else
      fileUpload fileInput
    return
  return