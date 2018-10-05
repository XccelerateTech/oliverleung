var letters = [
    "j", "a", "b", "c" , "d", "e", "f", "g", "h", "i"
];

    // num is a string
function transform(num) {
    
    // split
    var numArray = num.split("");

    // sort
    var numSort = numArray.sort(function(first, second) {
      return first > second;
    })
    
    // changing number to letter
    var word = numSort.reduce(function(accumulator, elements) {
      accumulator.push(letters[elements]);
      return accumulator
    // pushed into an empty array
    }, []);
    
    // combining letters in array into a word
    var actualWord = word.join("");

    return actualWord;
}   