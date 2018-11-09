// Create a HTTP Server (express)

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload'); // conflicts with multer
const multer = require('multer');

const app = express();

///////////////// multer storage /////////////////

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './files/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage: storage });

const upload = multer();

// declare const for upload directory so we can access it later

const uploadDir = __dirname + path.sep + 'files';

// const upload = multer({dest: './files/'});

const port = 8080;

//////////////////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload()); // commented out whilst using multer
// middleware allowing access to uploaded files
app.use(express.static('files'));
// have to set path to /assets to be able to read css file with index in current location
app.use('/assets', express.static(__dirname + '/assets'));

///////////////// creating cache /////////////////

// create empty object to store our array of file objects
let cache = {};

// create promises to read and write files and store to our created cache
// writeFile is a function taking name and body of the file and storing them
function writeFile(name, body) {
    return (new Promise((resolve, reject) => {
        fs.writeFile(uploadDir + path.sep + name, body, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(name);
        });
        // action following resolve - call readFile
    })).then(readFile);
}

// readFile takes file as parameter and searches files directory for the name of the file we are searching for
function readFile(file) {
    return (new Promise((resolve, reject) => {
        fs.readFile(uploadDir + path.sep + file, (err, body) => {
            if (err) {
                return reject(err);
            }
            resolve(body);
        });
    }));
}

//////////////////////////////////////////////////

// get our index page from our local server '/' root folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// get request to download file from cache
app.get('/files/:name', (req, res) => {
    if (cache[req.params.name] == null) {
        cache[req.params.name] = readFile(req.params.name);
    }
    cache[req.params.name]
        .then((body) => res.send(body))
        .catch((e) => res.status(500).send(e.message));
});

// post request to send our file to the server

// USING EXPRESS-FILEUPLOAD

// app.post('/upload', function (req, res) {
//     // if(Object.keys(req.files).length == 0) {
//     //     return res.status(400).send('No files were uploaded');
//     // }
//     if (req.files) {
//         console.log(req.files);
//         // targeting the form file uploaded, then getting the name of that object
//         let file = req.files.filename,
//             filename = file.name;

//         // './' very important syntax for targeting current folder!
//         // use .mv to target where the file goes in server
//         file.mv('./files/' + filename, function (err) {
//             if (err) {
//                 return res.status(500).send(err);
//             } else {
//                 res.send('File uploaded!');
//             }
//         });
//     };
// });

app.post('/upload', upload.single('filename'), (req, res) => {

    if (!req.files) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received');
        console.log(req.files);

        let file = req.files.filename.name // files -> file
        let data = req.files.filename.data // files -> file
        cache[file] = writeFile(file, data);
        cache[file].then(() => res.send({ success: true }))
            .catch((e) => res.status(500).send(e.message));

        // return res.send({
        //   success: true
        // })
    }
});

// app.listen(8080);

app.listen(port, () => console.log(`Server started on port ${port}`));