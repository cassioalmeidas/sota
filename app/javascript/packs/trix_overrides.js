import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("https://cors-anywhere.herokuapp.com/");


$(document).on('trix-initialize', function (e) {
    const trixEditor = document.querySelector("trix-editor");
    const abstract = document.getElementById('abstract');
    var button, copyButton, pasteUrl, toolBar, trix;
    trix = e.target;
    toolBar = trix.toolbarElement;
    button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'trix-button');
    button.setAttribute('data-trix-action', 'x-paste-abs-translated');
    button.setAttribute('title', I18n.t('researches.annotate_papers.paste_abs_translated'));
    button.setAttribute('tabindex', '-1');
    button.innerText = I18n.t('researches.annotate_papers.paste_abs_translated');
    copyButton = toolBar.querySelector('.trix-button-group.trix-button-group--block-tools').appendChild(button);
    copyButton.addEventListener('click', function () {
      translate(abstract.innerHTML, { to: "pt" })
        .then(res => {
          trixEditor.editor.insertString(res.text)
          console.log(res.text)
        })
        .catch(err => {
          console.error(err);
        });
    });
    return;
});
