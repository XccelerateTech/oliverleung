var Song = require('./Song');

describe("Testing our Song constructor", function () {
    // undefined
    var song1, song2, song3;

    beforeEach(function () {
        // create multiple instances
        song1 = new Song('Minority', 'Warning', 'Green Day');
        song2 = new Song('Drive', 'Make Yourself', 'Incubus');
        song3 = new Song('Jumper', 'Third Eye Blind', 'Third Eye Blind');
        song4 = new Song('Waiting', 'Warning', 'Green Day');
    })

    // afterEach reset
    afterEach(function () {
        song1;
        song2;
        song3;
        song4;
    })

    //////////////// TEST CASES ////////////////
    
    it("should equal the song name", function () {
        expect(song1.name).toEqual('Minority');
        expect(song2.name).toEqual('Drive');
    });

    it("should equal the album", function () {
        expect(song2.album).toEqual('Make Yourself');
        expect(song3.album).toEqual('Third Eye Blind');
    });

    it("should equal the artist", function () {
        expect(song1.author).toEqual('Green Day');
        expect(song3.author).toEqual('Third Eye Blind');
    });

    it("should return the description", function () {
        expect(song1.getDescription()).toEqual('The name of this song is Minority and it is from the album Warning. It is written by Green Day');
    });

    it("should tell us if the same album", function () {
        expect(song1.isInSameAlbum(song4)).toEqual(true);
        expect(song1.isInSameAlbum(song3)).not.toEqual(true);
    });

})