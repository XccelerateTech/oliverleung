const express = require('express');
const app = express();
const session = require('express-session');
const setupPassport = require('./passport');
const bodyParser = require('body-parser');
const router = require('./router')(express);
const port = process.env.PORT || 3030;

app.use(session({
    secret: 'supersecret',
    // what do these do? - receive deprecated undefined message without
    resave: true,
    saveUninitialized: true
}));

// bodyParser must be configured in-order to get bcrypt user login to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

setupPassport(app);

app.use('/', router);

app.listen(port);
console.log('listening on port ', port);