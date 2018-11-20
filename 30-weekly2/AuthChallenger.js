module.exports = function AuthChallenger(users) { // users parameter is an object
    return function(username, password) {
        // return so long as username type is not undefined and username is the correct password
        return typeof users[username] !== 'undefined' && users[username] === password;
    }
}