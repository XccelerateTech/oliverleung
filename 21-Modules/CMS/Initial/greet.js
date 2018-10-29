// this file is our module, accessed via require

// console.log('Hello there');

var greet = function() {
    console.log('Hello there');
}
// greet();

// allows variable to be made available outside the module
module.exports = greet;