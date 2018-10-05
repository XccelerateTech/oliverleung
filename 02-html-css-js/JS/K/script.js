//Create key pairings using object property key:value pairs
//“a” - 6 “b” - 1 “d” - 7 “e” - 4 “i” - 3 “l” - 2 “m” - 9 “n” - 8 “o” - 0 “t” - 5


//  key-value pairs
var Key = {
    "6":"a",
    "1":"b",
    "7":"d",
    "4":"e",
    "3":"i",
    "2":"l",
    "9":"m",
    "8":"n",
    "0":"o",
    "5":"t"
}

var word = function (x) {
    if (x > 999999 && x < 100) {
        return undefined;
    }

    //convert the parameter x into string
    var numberString = x.toString();
    // 100 becomes "100"
    var result = "";
    //initial result is empty

    //for (var value of iterable) {} - iterates over property values
    for (var numberChar of numberString) {
        result = result + Key[numberChar];
        //result will loop over for each number/character of the string
    }
    return result;
}

// can also use: 
// var mystr = String(numparam);
// var myword = "";
// var myArr = mystr.split("");
// for (let word of myArr) {
//    myword = myword + Decode[word];
// }
//return myword