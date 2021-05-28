//Returns the template to be injected
function ResourceManager() {

  //Return template
  this.getTemplate = function () {
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
    <button class="" id ='bold-btn'><i class="fas fa-bold"></i></button>
    <button class="" id ='italic-btn'><i class="fas fa-italic"></i></i></button>
    </div>
    `;
  }
  
  //Returns Unique ID
  this.uuidv4 = function () {
    return Math.random().toString(36).substr(2, 6)
  }


}