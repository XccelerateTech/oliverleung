var fs = require('fs');

class NoteService {
    constructor(file) {
        this.file = file;
        this.initPromise = null;
        this.init();
    }

    init() {
        if (this.initPromise === null) {
            this.initPromise = new Promise((resolve, reject) => {
                this.read()
                    .then(() => {
                        resolve();
                    })
                    .catch(() => {
                        // initializes our stored notes object
                        this.notes = {};
                        this.write()
                            .then(resolve)
                            .catch(reject);
                    });
            });
        }
        return this.initPromise;
    }

    // reading our apps stored notes from server
    read() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.file, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }
                try {
                    this.notes = JSON.parse(data);
                    console.log('look a note' + this.notes)
                }
                catch (e) {
                    return reject(e);
                }
                return resolve(this.notes);
            });
        });
    }

    // method for writing our notes to server
    write() {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.file, JSON.stringify(this.notes), (err) => {
                if (err) // {
                    return reject(err);
                // }
                resolve(this.notes);
            });
        });
    }

    add(note, user) {
        return this.init().then(() => {
            if (typeof this.notes[user] === 'undefined') {
                // return empty array if user has no notes - required to be able to add new note to initially undefined object
                this.notes[user] = [];
            }
            // then add/push the new note to the empty array
            this.notes[user].push(note);
            return this.write();
        });
    }

    list(user) {
        if (typeof user !== 'undefined') {
            return this.init()
                .then(() => 
                    this.read()
                )
                .then(() => {
                    // if user exists, but does not have any notes
                    if (typeof this.notes[user] === 'undefined') {
                        return [];
                    } else {
                        // missed this line - which therefore did not print the list of notes
                        return this.notes[user];
                    }
                });
        } else {
            // call init() if user does not exist
            return this.init().then(() => {
                return this.read();
            });
        };
    }

    update(index, note, user) {
        return this.init().then(() => {
            if (typeof this.notes[user] === 'undefined') {
                throw new Error('Cannot update a note if user does not exist!');
            }
            if (this.notes[user].length <= index) {
                throw new Error(`Cannot update a note that doesn't exist!`);
            }
            // if the above checks are passed, then return the specific note chosen
            this.notes[user][index] = note;
            return this.write();
        });
    }

    remove(index, user) {
        return this.init().then(() => {
            if (typeof this.notes[user] === 'undefined') {
                throw new Error('Cannot remove a note that does not exist!');
            }
            if (this.notes[user].length <= index) {
                throw new Error(`Can't remove a note that doesn't exist!`);
            }
            // simply removes the note (splice 1 note) at the specified index position if the above checks pass
            this.notes[user].splice(index, 1);
            return this.write();
        });
    };

}

module.exports = NoteService;