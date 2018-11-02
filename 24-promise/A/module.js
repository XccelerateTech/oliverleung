// Create a module that contains a promised version of fs.readdir and fs.stat

const fs = require('fs');

var readdir = function(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                // show the contents of the directory in your filesystem, returning them into an array
                resolve(files);
            }
        });
    });
}

// we can use fs.stat to check file/directory
var stat = function(path) {
    return new Promise((resolve, reject) => {
        // fs.stat(path, callback)
        fs.stat(path, (err, stats) => {
            if (err) {
                reject(err);
            } else {
                // show the stats of that object residing on the filesystem - we will use to determine type
                resolve(stats);
            }
        });
    });
}

// This will not work. Can instead do module.exports.stat = (path) => {...}
// module.exports = readdir();
// module.exports = stat();

module.exports = {
    readdir,
    stat
}