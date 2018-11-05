const promisedFS = require('./module');
const pathMod = require('path');

// Use the modules to determine whether each path leads to a directory or file

// we want a function to first output what files are in the folder
function outputDirectory(filePath) {
    // .then(callback) - resolved
    promisedFS.stat(filePath).then((stats) => {
        // if statement to determine whether directory or not
        if (stats.isDirectory()) {
            console.log(filePath + ' is a directory');
            // call another function to show the contents of the directory
            traverseFolder(filePath);
        } else {
            console.log(filePath + ' is a file');
        }
    // add an catch for error case
    }).catch((error) => {
        console.log(error);
    })
}
// second function to traverse the identified folder
function traverseFolder(path) {
    // contents of the directory
    promisedFS.readdir(path).then((files) => {
    // we want to loop over each file in the directory/array created
    // for the next call we need to set a new filePath
        for (let file of files) {
            const filePath = pathMod.join(path, file);
            // call(back) the outputDirectory with the new path for each file/folder
            outputDirectory(filePath);
            // then we call the outputDirectory function to rerun the test - this will continuously loop until all files have been targeted
        };
    }).catch((error) => {
        console.log(error);
    })
}

// relative to app.js location - target the folder
// initialize the function  
outputDirectory('./files');