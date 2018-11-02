var express = require('express');
var app = express();
const bodyParser = require('body-parser');

// convert json format from server
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('hello son');
});

app.post('/sum', function(req, res) {
    console.log(req.path);

    // prints the server body - our array [1,2,3,4]
    const array = req.body;
    console.log(array);
    // need a function to sum the array
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);

    // convert data back to json format
    res.json({"sum": sum});
});

app.listen(8080);