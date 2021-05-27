//Returns the template to be injected
function getTemplate () {
    return tempelate = `
<div class = 'note-header'>
  <button id='delete-btn'><i class="fas fa-times"></i></button>

</div>
<div class = 'note-title' contenteditable="true">
  Title goes here
</div>
<div class = 'note-content'contenteditable="true">
  Content goes here
</div>
<div class="note-btns">
<button class="button button4" id ='save-btn'>Save Note</button>
</div>
`;
}


