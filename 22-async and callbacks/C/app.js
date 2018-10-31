let http = require('http');
let fs = require('fs');

// method to target EVERY file needed

http.createServer(function(req, res){
    if(req.url === '/') {
        // res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
    } else if (req.url === '/assets/images/flowershop.jpg') { 
        fs.createReadStream(__dirname + '/flowershop/assets/images/flowershop.jpg').pipe(res);
    } else if (req.url === '/assets/images/logo.png') { 
        fs.createReadStream(__dirname + '/flowershop/assets/images/logo.png').pipe(res);
    } else if (req.url === '/assets/images/flower-icon.png') { 
        fs.createReadStream(__dirname + '/flowershop/assets/images/flower-icon.png').pipe(res);
    } else if (req.url === '/assets/images/payment-icon.png') { 
        fs.createReadStream(__dirname + '/flowershop/assets/images/payment-icon.png').pipe(res);
    } else if (req.url === '/assets/images/phone-icon.png') { 
        fs.createReadStream(__dirname + '/flowershop/assets/images/phone-icon.png').pipe(res);
    } else if (req.url === '/assets/images/truck-icon.png') { 
        fs.createReadStream(__dirname + '/flowershop/assets/images/truck-icon.png').pipe(res);
    } else if (req.url === '/assets/styles/main.css') { 
        fs.createReadStream(__dirname + '/flowershop/assets/styles/main.css').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080, '127.0.0.1')

// cleaner method

// let path = require('path');

// http.createServer(function (req, res) {
//     // defining a variable - if/else statement
//     let filePath = req.url == '/' ? 'index.html' : req.url;

//     // generating response header - status code 200
//     res.writeHead(200);

//     // path.join adds slashes in-between the parameters
//     fs.createReadStream(path.join(__dirname, 'flowershop', filePath)).pipe(res);

// }).listen(8080,'127.0.0.1');