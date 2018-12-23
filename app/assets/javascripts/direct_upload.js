// This code uses:
//
// * babel-polyfill (https://babeljs.io/docs/usage/polyfill/)
// * whatwg-fetch (https://github.github.io/fetch/)
// * uppy (https://uppy.io)


$(document).on('turbolinks:load', function(){
  function fileUpload(fileInput) {
    fileInput.style.display = 'none' // uppy will add its own file input

    var uppy = Uppy.Core({
        debug: true,
        id: fileInput.id,
        autoProceed: true,
        restrictions: {
          allowedFileTypes: fileInput.accept.split(','),
        }
      })
      .use(Uppy.FileInput, {
        target: fileInput.parentNode,
        pretty: false
      })
      .use(Uppy.Informer, {
        target: fileInput.parentNode,
      })

     .use(Uppy.StatusBar, {
        target: '.UppyInput-Progress',
        hideUploadButton: true,
        hideAfterFinish: false,
        locale: {
          strings: {
            uploading: 'Enviando',
            complete: 'Completo',
            uploadFailed: 'Envio falhou',
            pleasePressRetry: 'Por favor, envie o arquivo novamente',
            paused: 'Pausado',
            retry: 'Repetir',
            cancel: 'Cancelar',
            retryUpload: 'Repetir o upload',
            pauseUpload: 'Pausar upload',
            resumeUpload: 'Continuar upload',
            cancelUpload: 'Cancelar upload',
            filesUploadedOfTotal: {
              0: '%{complete} de %{smart_count} arquivo enviado',
              1: '%{complete} of %{smart_count} arquivos enviado'
            },
            dataUploadedOfTotal: '%{complete} de %{total}',
            xTimeLeft: '%{time} restantes',
            uploadXFiles: {
              0: 'Enviar %{smart_count} arquivo',
              1: 'Enviar %{smart_count} arquivos'
            },
            uploadXNewFiles: {
              0: 'Enviar +%{smart_count} arquivo',
              1: 'Enviar +%{smart_count} arquivos'
            }
          }
        }

      })

    if (fileInput.dataset.uploadServer == 's3') {
      uppy.use(Uppy.AwsS3, {
        serverUrl: '/', // will call Shrine's presign endpoint mounted on `/s3/params`
      })
    } else {
      uppy.use(Uppy.XHRUpload, {
        endpoint: '/upload', // Shrine's upload endpoint
        fieldName: 'file',
      })
    }

    uppy.on('upload-success', function (file, data) {
      
      if (fileInput.dataset.uploadServer == 's3') {
        // construct uploaded file data in the format that Shrine expects
        var uploadedFileData = JSON.stringify({
          id: file.meta['key'].match(/^cache\/(.+)/)[1], // object key without prefix
          storage: 'cache',
          metadata: {
            size:      file.size,
            filename:  file.name,
            mime_type: file.type,
          }
        })
      } else {
        var uploadedFileData = JSON.stringify(data)
      }

      // set hidden field value to the uploaded file data so that it's submitted with the form as the attachment
      var hiddenInput = document.getElementById(fileInput.dataset.uploadResultElement)
      hiddenInput.value = uploadedFileData
    })

    return uppy
  }

  document.querySelectorAll('input[type=file]').forEach(function (fileInput) {
    if (fileInput.multiple) {
      fileInput.addEventListener('change', function (event) {
        Array.from(fileInput.files).forEach(function (file) {
          // create a new copy of the resource for the selected file
          var template = document.getElementById(fileInput.dataset.template)
          var uploadList = document.getElementById(fileInput.dataset.uploadList)
          var uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
          uploadList.insertAdjacentHTML('beforeend', template.innerHTML.replace(/{{index}}/g, uniqueId))

          // trigger file upload on the new resource
          var singleFileInput = uploadList.lastElementChild.querySelector('input[type=file]')
          var uppy = fileUpload(singleFileInput)
          uppy.addFile({name: file.name, type: file.type, data: file})
        })

        // remove selected files
        fileInput.value = ''
      })
    } else {
      fileUpload(fileInput)
    }
  })
})