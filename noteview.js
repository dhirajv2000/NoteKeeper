//Returns the template to be injected
function NoteView() {
  const self = this;
  let noteArray, note;

  //returns the id of the button which is clicked
  this.getButtonId = function (node) {
    return node.parentNode.parentNode.id;
  }

  //Clears Placeholder
  this.clearPlaceholder = function () {
    clickID = this.parentNode.id;
    noteArray = self.getStorage();
    note = noteArray.find(note => note.id == clickID);
    if (note.title == '') {
      document.getElementById(clickID).querySelector('.note-title').innerHTML = '';
    }
  }

  this.addPlaceholder = function () {
    if (this.innerHTML == "")
      this.innerHTML = "Title goes here"
  }

  //Change font
  this.changeFont = function () {
    let buttonClicked = this.id;
    let fontStyle = {
      'italic-btn': 'italic',
      'bold-btn': 'bold',
      'underline-btn': 'underline',
      'strike-btn': 'strike'
    }
    let selectedFont = fontStyle[buttonClicked]
    clickID = self.getButtonId(this);
    const wrapperContent = document.getElementById(clickID).querySelector('.note-content');
    noteArray = self.getStorage();
    if (!(wrapperContent.innerHTML)) return
    note = noteArray.find(note => note.id == clickID);
    if (wrapperContent.classList.contains(selectedFont)) {
      wrapperContent.classList.remove(selectedFont)
      note.font[selectedFont] = false;
    } else {
      wrapperContent.classList.add(selectedFont)
      note.font[selectedFont] = true;
    }


    self.setStorage(noteArray)
  }
}