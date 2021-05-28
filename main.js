//creating instance of NoteManager
const resourceManager = new ResourceManager;



//NoteManager inherits properties of StorageManager
NoteManager.prototype = Object.create(StorageManager.prototype);
NoteManager.prototype.constructor = NoteManager;

//Create NoteManager Object
const noteManager = new NoteManager(resourceManager);

//Adding Event listeners
document.querySelector('#add-btn').addEventListener('click', noteManager.addNewNote)
document.querySelector('#clear-btn').addEventListener('click', noteManager.clearNotes)
document.addEventListener('DOMContentLoaded', noteManager.displayAll)


/*
window.onbeforeunload = function(event)
{      console.log(noteManager.isUnsaved) 
    if(noteManager.isUnsaved) return "Confirm refresh";
};*/