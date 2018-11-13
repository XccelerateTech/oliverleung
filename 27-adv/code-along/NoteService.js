var fs = require('fs');

class NoteService {
    constructor(filename) {
        this.filename = filename;
        this.notes = [];
        // how we save our notes
        this.listNotePromise = this.listNote();
    }

    listNote() {
        return new Promise((resolve, reject) => {
            // undefined as we currently don't have a note.json file
            fs.readFile(this.filename, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                    // our error message is handled, now we add a catch block below
                }
                // when we are doing this, we are not actually saving our notes - need to add logic
                this.notes = JSON.parse(data);
                // without parsing json, our test expects a [ ]
                resolve(this.notes);
            });
        });
    }

    addNote(note) {
        return new Promise((resolve, reject) => {
            // calls listNote method
            this.listNotePromise.then(() => {
                this.notes.push(note)
                fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
            });
        })
    }

    deleteNote() {

    }

};


module.exports = NoteService;