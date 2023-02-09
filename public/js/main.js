// Activates the side nav button
M.Sidenav.init(document.querySelector('.sidenav'))
// Fixes issue with add.hbs
M.FormSelect.init(document.querySelector('#status'))
// WYSIWYG Editor
const editor = document.querySelector('#body');
if(editor !== null){
    CKEDITOR.replace("body", {
        plugins: 'wysiwygarea, toolbar, basicstyles, link'
    })    
}


