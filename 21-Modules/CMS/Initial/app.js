// notice how greet does not need the .js extension
var greet = require('../greet');

// node doesn't allow modules to access other modules variables
// to do so, will need to utilize the helper object called module.exports
// we therefore allow app.js (defining variable with whichever name we choose) to share the greet variable of greet.js
greet();