// receives the random number and returns the respective letter in the alphabet (5 = e, 14 = n)

var number = require('./getRandomInt');

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    index;

var map = function(){
    // convert 1-26 to index positions
    index = number() - 1;
    return alphabet[index];
}

// console.log(map());

module.exports = map;