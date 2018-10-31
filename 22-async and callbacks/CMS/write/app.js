var fs = require('fs');

// createReadStream emits an event called 'data'
var readable = fs.createReadStream(__dirname + '/text.txt', {encoding: 'utf8', highWaterMark: 32*1024});

// write to a new file

var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

// we listen for the event 'data'
// data received is our chunk
// readable.on('data', function(chunk){
//     // default buffer size is about 64000 bytes, so it will log twice
//     // can reduce the buffer size using highWaterMark
//     console.log(chunk.length);
//     writeable.write(chunk);
// })

// we can connect two streams by using createReadStream object pipe method

readable.pipe(writeable);