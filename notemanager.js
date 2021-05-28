//Manages Operations on notes
function NoteManager(resourceManager) {
    const self = this;
    let clickID, noteContent, noteTitle, note;
    const grid = document.querySelector('.grid')
    let noteArray = [];
    //this.isUnsaved = false;

    //Adds a new note to local storage
    this.addNewNote = function () {
        let note = new CreateNote(resourceManager.uuidv4());
        noteArray = self.getStorage();
        noteArray.push(note);
        self.setStorage(noteArray)
        self.renderNote(note);
    }

    //Displays the note on the page
    this.renderNote = function (note) {
        let tempelate = resourceManager.getTemplate();
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', note.id);
        wrapper.setAttribute('class', 'note-wrapper');
        wrapper.innerHTML += tempelate;
        wrapper.querySelector('.note-title').innerHTML = note.title;
        wrapper.querySelector('.note-content').innerHTML = note.content;
        self.appendListeners(wrapper);
        grid.appendChild(wrapper)
    }

    //Updates notes on click of save button
    this.updateNote = function (id) {
        clickID = id;
        const wrapper = document.getElementById(clickID);
        noteTitle = wrapper.querySelector('.note-title')
        noteContent = wrapper.querySelector('.note-content')
        noteArray = self.getStorage();
        note = noteArray.find(note => note.id == clickID);
        note.title = noteTitle.innerHTML;
        note.content = noteContent.innerHTML;
        self.setStorage(noteArray)
        //self.isUnsaved = false;
    }

    //Deletes a note and updates local storage
    this.deleteNote = function () {
        clickID = self.getButtonId(this);
        if (!confirm('Are you sure you want to delete? Notes once deleted cannot be undone.')) return;
        note = noteArray.find(note => note.id == clickID);
        noteArray.splice(noteArray.findIndex(obj => obj.id === note.id), 1)
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
        if (!confirm('Are you sure you want to delete? Notes once deleted cannot be undone.')) return;
        self.clearStorage();
        self.displayAll();
    }

     //returns the id of the button whic is clicked
     this.getButtonId = function (node) {
        return node.parentNode.parentNode.id;
    }

    //Detects changes and updates the note
    this.detectChange = function () {
        self.updateNote(this.id);
    }

    //appends event listeners to a new note object
    this.appendListeners = function (wrapper) {

        let boldButton = wrapper.querySelector('.note-btns').querySelector('#bold-btn')
        boldButton.addEventListener("click", self.makeBold)

        let italicButton = wrapper.querySelector('.note-btns').querySelector('#italic-btn')
        italicButton.addEventListener("click", self.makeItalic)

        let deleteButton = wrapper.querySelector('#delete-btn')
        deleteButton.addEventListener('click', self.deleteNote)

        wrapper.addEventListener('input', self.detectChange)
    }

    //Make Itallic
    this.makeItalic = function () {
        clickID = self.getButtonId(this);
        const wrapper = document.getElementById(clickID);
        var textContent = wrapper.querySelector('.note-content').innerHTML;
        if (textContent.search('<i>') == -1) {
            wrapper.querySelector('.note-content').innerHTML = wrapper.querySelector('.note-content').innerHTML.italics();
        } else {
            wrapper.querySelector('.note-content').innerHTML = textContent.replace(/(<([^b>]+)>)/ig, '');
        }
        self.updateNote(self.getButtonId(this))
    }

    //Make Bold
    this.makeBold = function () {
        clickID = self.getButtonId(this);
        const wrapper = document.getElementById(clickID);
        var textContent = wrapper.querySelector('.note-content').innerHTML;
        if (textContent.search('<b>') == -1) {
            wrapper.querySelector('.note-content').innerHTML = wrapper.querySelector('.note-content').innerHTML.bold();
        } else {
            wrapper.querySelector('.note-content').innerHTML = textContent.replace(/(<([^i>]+)>)/ig, '');
        }
        self.updateNote(self.getButtonId(this))
    }
}