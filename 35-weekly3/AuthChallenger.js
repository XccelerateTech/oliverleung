// module.exports = function AuthChallenger(users) { // users parameter is an object
//     return function(username, password) {
//         // return so long as username type is not undefined and username is the correct password
//         return typeof users[username] !== 'undefined' && users[username] === password;
//     }
// }

// AuthChallenger adjusted for knex

const AuthChallenger = function(knex) {

  return (username, password, cb) => {
    // constructing a knex query to verify our users
    let query = knex.select('username')
                .from('users') // from our postgres table
                .where('username', username) // will need to reformat/create new user tables for knex
                .where('password', password);

        query.then((rows) => {
          if(rows.length === 1) { // in the event the user is found - only 1 should return
            cb(null, true); // null error object
          } else {
            cb(null, false); // callback success value in the false case, would be false
          }
        }).catch((err) => {
          cb(err);
        })
  }
}

module.exports = AuthChallenger;