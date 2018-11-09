const NoteService = require('../NoteService.js');
const fs = require('fs');

describe('Testing NoteService', function () {

    beforeEach(function () {
        if (fs.existsSync('test.json')) {
            fs.unlinkSync('test.json');
        }
        fs.writeFileSync('test.json', '[]');
    })

    // upon every reset, the note[] should be empty
    it('list our notes using listNote()', function (done) {
        const noteService = new NoteService('test.json');
        // we can chain .then as we are using promises
        noteService.listNote().then((result) => {
            expect(result).toEqual([]);
            // fire our callback
            done();
        }).catch((err) => {
            done.fail(err);
        });
    });

    it('add a note using addNote()', function (done) {
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(() => {
            return noteService.listNote();
        }).then((result) => {
            expect(result).toEqual(['test']);
            done();
        }).catch((err) => {
            done.fail(err);
        });
    });

    it('should be able to add more than one note using addNote()', function (done) {
        // create a new noteService instance
        const noteService = new NoteService('test.json');
        // add one note
        noteService.addNote('test').then(() => {
            // then, add another note
            return noteService.addNote('another').then(() => {
                return noteService.listNote();
            }).then((result) => {
                expect(result).toEqual(['test', 'another']);
                done();
            }).catch((err) => {
                done.fail(err);
            });
        })
        // then list the notes, here we expect two notes
    })

    it('add notes before listing notes, while having the previous notes', function (done) {
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(() => {
            const noteService2 = new NoteService('test.json');
            return noteService2.addNote('test 2').then(() => {
                return noteService2.listNote();
            }).then((result) => {
                expect(result).toEqual(['test', 'test 2']);
                done();
            }).catch((err) => {
                done.fail(err);
            }).catch((err) => {
                done.fail(err);
            })
        })
    })
})