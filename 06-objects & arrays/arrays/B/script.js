function reverse(num) {

    // convert to string
    
    var nString = num.toString();
    
    // push string individually into an array
    
    var arr = nString.split("");
    
    // reverse array order
        
    var transform = arr.sort(function(first, second){
        return first < second;
        })

    // creates new array that contains numbers
    var numTransform = transform.map(function(n) {
        return Number(n);
    }) 
    
    return numTransform 
    
    }