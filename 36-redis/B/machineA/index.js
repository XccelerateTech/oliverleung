// Other than a cache server, we can also use Redis as a messaging broker. Setup the redis server on one of your machine. Try to LPUSH a message like the following from machine A(Say your own machine) to the a specific List called messageQueue

const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// middleware to run our app through bodyParser as we will use Postman as we do not have a frontend set up
app.use(bodyParser.urlencoded({ extended: false })); // extended: false - values can be string or array (versus any type when true)

// set up our connection details - refer to redis.conf file
const client = redis.createClient({
  host: 'localhost',
  port: 6379,
  password: 'password' // might be auth_pass: 'password'
});

app.post('/', function (req, res) {
  // we want to return the object format stated in the question spec
  // call redis client
  client.lpush('messageQueue', JSON.stringify({ // check what the 'messageQueue' refers to - the name of our message list (myList) that we set (as part of LPUSH command)
    // format of the information we want to push, predefined in the exercise - retrieved via our post request
    msg: req.body.msg,
    date: req.body.date
  }), (err) => {
    if (err) {
      console.log(err);
      res.json(err);
      return;
    }
    // return these console.logs regardless
    console.log(req.body.msg);
    console.log('LPUSH a task with a msg ' + req.body.msg + ' and date' + req.body.date);

    res.json('ok');
  })
})
// set listening port
app.listen(6699);