var fs = require('fs');

// create a copy function that takes a file path as its parameter
function copy(path){

    var readable = fs.createReadStream(__dirname + '/text.txt', {encoding: 'utf8', highWaterMark: 32*1024});

    // our function path is called here
    var writeable = fs.createWriteStream(__dirname + path);

    readable.pipe(writeable);

};

copy('/../textcopy.txt');


