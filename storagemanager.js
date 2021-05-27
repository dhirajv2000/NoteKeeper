//Manages localstorage
function StorageManager() {}

//Stores array of objects
StorageManager.prototype.setStorage = function (notesList) {
    localStorage.setItem('notesList', JSON.stringify(notesList) )
}

//Retrieves array of objects
StorageManager.prototype.getStorage = function () {
    if(localStorage.length == 0) return []
    return JSON.parse(localStorage.getItem('notesList')) 
   
}

//Clears storage
StorageManager.prototype.clearStorage = function () {
    localStorage.clear();
}

//returns the maxID
/*
StorageManager.prototype.maxID = function () {
   return localStorage.length == 0 ? 0 : Math.max(...this.getStorage().map(obj => obj.id)) + 1;
}*/