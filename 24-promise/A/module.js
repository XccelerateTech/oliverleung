// Create a module that contains a promised version of fs.readdir and fs.stat

const fs = require('fs');

function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                // show the contents of the directory in your filesystem
                resolve(files);
            }
        });
    });
}

function stat(path) {
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

module.exports = readdir();
module.exports = stat();