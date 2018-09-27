function calculator (x,y,z) {
    if (x == '+') {
        console.log(y + z);
    } else if (x == '-') {
        console.log(y - z);
    } else if (x == '*') {
        console.log(y * z);
    } else {
        console.log(y / z);
    }
}

//Bonus Exercise

function area(height, width) {
    return height * width;
}