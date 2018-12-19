// Create a HTTP server using express - first import all libraries and modules required

const express = require('express');

// we are switching to using knex as our server

// const fs = require('fs'); // file-system
// const path = require('path'); // file-path module

const hb = require('express-handlebars'); // handlebars used to create our page templates
const basicAuth = require('express-basic-auth'); // basic authentication - not practical for real world purposes
const bodyParser = require('body-parser'); // to parse data so it is readable on client-side

// setup our express app
const app = express();

// import modules that were made by us
const config = require('./config.json')[process.env.NODE_ENV || 'development']; // uses default node environment(?) or starts in development
const AuthChallenger = require('./AuthChallenger');
const NoteService = require('./NoteService'); // our note taking module
const NoteRouter = require('./NoteRouter'); // router module - FURTHER READING NEEDED

// import our knex config settings
const knexConfig = require('./knexfile').development; // and use our development environment
const knex = require('knex')(knexConfig); // connect to our database using knex

// set up handlebars, as well as the view engine()
app.engine('handlebars', hb({ defaultLayout: 'main' })); // handlebar setup syntax - this is our main page structure
app.set('view engine', 'handlebars'); // set view engine to handlebars

// set up our middleware
app.use(express.static('public')); // express will serve this directory holding our stylesheet etc (ours static files)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(basicAuth({
  authorizer: new AuthChallenger(knex), // our AuthChallenger details are stored in the knexConfig // new AuthChallenger(JSON.parse(fs.readFileSync(path.join(__dirname, config.users)))),
  authorizeAsync: true,  // fixes callback issues with basic-auth
  challenge: true,
  realm: 'Note Taking Application using knex'
}));

// create a new instance of noteService, passing the dir and file name we want to write and read from
let noteService = new NoteService(knex); // our knex file also has the path to our database --> db_name=notes // new NoteService(path.join(__dirname, config.notes));

// our initial get request
app.get('/', function (req, res, next) {
  console.log('lets begin...');
  next();
});

// get our notes for the specified user - UNCHANGED
app.get('/', function (req, res) {
  noteService.list(req.auth.user).then(function (notes) {
    console.log(req.auth.user);
    // as we are using handlebars, we use res.render instead of res.send, looking for the index file of the views folder
    res.render('index', {
      user: req.auth.user, // express-basic-auth syntax to access object containing the authorized credentials
      notes: notes
    });
  });
});

// set up the NoteRouter - allows us to get the notes from the server, to the right location
app.use('/api/notes/', (new NoteRouter(noteService)).router());

// set up the port that we are listening to for our application
app.listen(config.port, function () {
  console.log(`Note Taking App listening on port ${config.port}`)
});

// append .app? - for testing
module.exports.app = app;