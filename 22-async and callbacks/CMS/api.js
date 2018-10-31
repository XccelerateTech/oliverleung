var http = require('http');

// createServer takes a callback with two parameters: request / response
http.createServer(function(req, res) {

    // respond to request

    // this generates the response header - status code 200 indicates everything ran smoothly - and we define the content type being sent
    res.writeHead(200, {'content-Type':'text/plain'});
    res.end('Hello world');

// defines which port (8080) the server is supposed to listen for request
}).listen(8080,'127.0.0.1');