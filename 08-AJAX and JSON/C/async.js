function whoIsInSpace(callback) {

    let http = new XMLHttpRequest();
    http.open('GET', `http://api.open-notify.org/astros.json`)

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            // we need to create an object to store the data in
            let parsedObj = JSON.parse(http.responseText);

            callback(parsedObj.people.map(function (person) {
                //iterating the people, returning each name
                return person.name;
            // callback(http.responseText);
            }))
        } else {
            console.log('An error occurred: ' + http.status);
        }
    }
    http.send();
}

// this only returns the object
whoIsInSpace(function (data) {
    console.log(data);
})
