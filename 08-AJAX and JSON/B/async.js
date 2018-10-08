// create the function which takes three parameters
function informMe(endpoint, value, callback) {

    var http = new XMLHttpRequest();
    // data is retrieved via API
    http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`, true);

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            callback(http.responseText); //get data into the DOM
        } else {
            console.log('error occurred' + http.status);
        }
    }

    // onreadystatechange should be before http.send()
    http.send();
}

informMe('capital', 'paris', function(callback){
    console.log('I was called second : ' + JSON.parse(callback));
})

informMe('capital', 'paris', function(callback){
    console.log(JSON.parse(callback)); // use the callback function to console.log
})