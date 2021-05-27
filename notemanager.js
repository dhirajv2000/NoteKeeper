//Manages Operations on notes
function NoteManager () {
    const self = this;
    let clickID, noteContent,noteTitle, note, noteID = 0;
    const grid = document.querySelector('.grid')
    let noteArray = [];

    //returns the id of the button whic is clicked
    this.getButtonId = function (node){
        return node.parentNode.parentNode.id;
    }

    //appends event listeners to a new note object
    this.appendListeners = function (wrapper) {
        let saveButton = wrapper.querySelector('.note-btns').querySelector('#save-btn')
        saveButton.addEventListener('click',self.updateNote)
        let deleteButton = wrapper.querySelector('#delete-btn')
        deleteButton.addEventListener('click', self.deleteNote)
    }

    //Adds a new note to local storage
    this.addNewNote = function () {
        let note = new CreateNote(noteID);
        noteID++;
        noteArray = self.getStorage();
        noteArray.push(note);
        self.setStorage(noteArray)
        self.renderNote(note);
    }

    //Displays the note on the page
    this.renderNote = function(note) {
        let tempelate = getTemplate();
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id',note.id);
        wrapper.setAttribute('class', 'note-wrapper');
        wrapper.innerHTML += tempelate;
        wrapper.querySelector('.note-title').innerHTML = note.title;
        wrapper.querySelector('.note-content').innerHTML = note.content;
        this.appendListeners(wrapper);
        grid.appendChild(wrapper)
    }

    //Updates notes on click of save button
    this.updateNote = function () {
        clickID = self.getButtonId(this);
        const wrapper = document.getElementById(clickID);
        noteTitle = wrapper.querySelector('.note-title')
        noteContent = wrapper.querySelector('.note-content')
        noteArray = self.getStorage();
        note = noteArray.find(note => note.id == clickID);
        note.title = noteTitle.innerHTML;
        note.content = noteContent.innerHTML;
        self.setStorage(noteArray)
     }

    //Deletes a note and updates local storage
     this.deleteNote = function () {
         clickID = self.getButtonId(this);
         note = noteArray.find(note => note.id == clickID);
         noteArray.splice(noteArray.findIndex(obj => obj.id === note.id) , 1)
         self.setStorage(noteArray)
         self.displayAll();
    }

    //Displays all the notes
    this.displayAll = function () {
        noteArray = self.getStorage();
        grid.innerHTML = '';
        noteArray.forEach(note => self.renderNote(note))
    }

    //Clears all the notes and local storage.
    this.clearNotes = function () {
        self.clearStorage();
        //noteID = self.maxID();
        self.displayAll();
    }
}