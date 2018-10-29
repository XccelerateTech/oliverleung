// function that returns a random number between 1-26

function getRandomInt() {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (26)) + 1; //The maximum and the minimum is inclusive
  }

// console.log(getRandomInt());

module.exports = getRandomInt;