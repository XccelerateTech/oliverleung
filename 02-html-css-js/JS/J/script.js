/* Write a function that expects a number as a parameter. If the value that is entered is less than 0, equal to 0, or not a number, 
the function should return the string ‘ERROR’. If the number that is entered is greater than or equal to 1000000 it should simply 
return the number. Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or 
equal to 1000000 and return that.*/

function numberGreaterThan1000000 (x) {
    if(isNaN(x)) {
        return('ERROR');
    } else if (x <= 0) {
        return('ERROR');
    } else if (x >= 1000000) {
        return (x);
    } else {
        while (x < 1000000) {
            x *= 10;
        }
        return (x);
    }
}