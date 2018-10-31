var express = require('express');
var app = express();

// express.static makes a route for every file within the folder
app.use(express.static('flowershop'));

app.listen(8080);