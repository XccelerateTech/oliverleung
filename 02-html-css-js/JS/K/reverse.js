var Key = {
    "a":"6",
    "b":"1",
    "d":"7",
    "e":"4",
    "i":"3",
    "l":"2",
    "m":"9",
    "n":"8",
    "o":"0",
    "t":"5"
}

var number = function (y) {
    //condition needs to be fixed
    if (y.length > 7 && y.length < 3) {
        return undefined;
    }

    var result = "";
    //initial result is empty

    //for (var value of iterable) {} - iterates over property values
    for (var charNum of y) {
        result = result + Key[charNum];
        //result will loop over for each number/character of the string
    }
    return result;
}