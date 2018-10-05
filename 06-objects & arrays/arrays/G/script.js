// G Create a function that takes an array as parameter.   The array consist of three numbers.   Return the index of the number that lies between the other two numbers.

// middle([2,3,1]) // 0 -> 2 at index 0 lies between 3 and 1
// middle([88, 7, 55 ]) // 2 -> 55 lies between 7 and 88

var array = [3,5,1]

function middle(array) {

    var maximum = Math.max(...array);

    var minimum = Math.min(...array);

    if (maximum > array[0] && minimum < array[0]) {
        return array.indexOf(array[0]);
    } else if (maximum > array[1] && minimum < array[1]) {
        return array.indexOf(array[1]);
    } else {
        return array.indexOf(array[2]);
    }
}