var myArray = [4, 8, 2, 7, 5];

// Write the processArray function, which takes an array and a callback function as parameters

function processArray(array,callback) {
    // we want a new array of the mapped results
    // result=[];

    // our callback will determine how the array is manipulated
    // push using map will push an array, inside the result array
    // result.push(array.map(callback));

    // return results of our new array
    // return result;
    // console.log(result);

    let data = array.map(callback);

    console.log(data)
};

// call our function for each iterable
processArray(myArray, function(a) {
    return a * 2 ;
});

processArray(myArray, function(b) {
    return b - 2;
    // console.log( b - 2 );
})
