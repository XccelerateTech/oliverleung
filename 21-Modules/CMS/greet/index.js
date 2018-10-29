var english = require('./english');
var german = require('./german');

// using object literal notation
module.exports = {
    // .english refers to var english
    english: english,
    // .german refers to var german
    german: german
}