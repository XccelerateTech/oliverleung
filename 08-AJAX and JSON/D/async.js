// class constructor

class User {
    constructor(option) {
        this.firstName = option.name.first;
        this.lastName = option.name.last;
        this.email = option.email;
        this.dob = option.dob;
    }
}

// function created to access random user generator

function randomUser(callback) {
    let http = new XMLHttpRequest();
    http.open('GET', `https://randomuser.me/api/?results=5`)

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            // parse the data
            let parsedUser = JSON.parse(http.responseText);
            // create new user instances, iterating the 5 users
            callback(parsedUser.results.map(function(user){
            // return the user
                return new User(user);
            }))
            // callback(http.responseText);
        } else {
            console.log('error  occurred' + http.status);
        }
    }
    http.send();
}

randomUser(function(callback) {
    console.log(callback);
})