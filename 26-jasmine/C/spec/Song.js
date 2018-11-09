class Song {
    constructor(name,album,author) {
        this.name = name;
        this.album = album;
        this.author = author;
    }

    getDescription() {
        return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}`;
    }

    // othersong(the other instance object) is the paramter - we want to check if it matches the album of the chosen song instance
    isInSameAlbum(othersong) {
        if(othersong.album === this.album) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Song;