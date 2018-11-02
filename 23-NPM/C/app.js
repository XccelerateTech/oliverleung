var express = require('express');
var app = express();
// required to parse server data format so it is readable for frontend
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.send('hello son');
});

app.post('/login', function(req, res) {
    console.log(req.path);
    console.log(req.body.name);
    res.send('post received');
});

app.listen(8080);