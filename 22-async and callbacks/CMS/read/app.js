// READ FILES

// fs - file system node module
var fs = require('fs');

// __dirname stands for the current directory node file is in
// need to state a text format to decode to
// var greeting = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

// readFileSync is synchronous
// refactor to make asynchronous

var greeting = fs.readFile(__dirname, '/greet.txt', 'utf8', function(err, data) {
    console.log(data)
});

console.log(greeting);