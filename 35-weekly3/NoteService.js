// var fs = require('fs');

// refractor NoteService for knex

class NoteService {
  constructor(knex) {
    this.knex = knex;
  }

  // we no longer need our init()/read()/write() methods

  add(note, user) {
    console.log('adding 1+1')

    let query = this.knex // querying our table
                .select('id')
                .from('user') // link our method parameter to our table variable
                .where('users.username', user);

    return query.then((rows) => {
      console.log(rows);
      if(rows.length === 1){
        return this.knex.insert({ // building our query
          content: note,
          user_id: rows[0].id
        }).into('notes');
      } else { // only necessary for test cases
        throw new Error('Cannot update a note from a user that does not exist');
      }
    });
  }

  list(user) { // this all messages of a specific user
    if (typeof user !== 'undefined') {
      let query = this.knex.select('notes.id', 'content')
                  .from('notes')
                  .innerJoin('users', 'notes.user_id', 'users.id') // only look for messages by a certain user
                  .where('users.username', user);

      return query.then((rows) => {
        console.log(rows)
        return rows.map(r => ({
          id: r.id,
          content: r.content
        }));
      });
    } else { // if user is undefined
      let query = this.knex.select('users.username', 'notes.id', 'content')
                  .from('notes') // notes table innerJoin with users table
                  // select * from "notes" inner join "users" on "notes"."user_id" = "users"."id"
                  .innerJoin('users', 'notes.user_id', 'users.id');

      return query.then((rows) => {
        // console.log(rows)
        const result = {};
        rows.forEach(r => {
          if(typeof result[r.username] === 'undefined') {
            result[r.username] = []; // if user undefined, list empty results array
          }
          result[r.username].push({
            id:r.id,
            content: r.content
          });
        });
        return result;
      });
    }
  }

  update(id, note, user) {
    let query = this.knex
                .select('id')
                .from('users')
                .where('users.username', user);

    return query.then((rows => {
      if(rows.length === 1) {
        return this.knex('notes')
              .where('id', id)
              .update({content: note});
      } else {
        throw new Error(`Cannot update a note that doesn't exist`);
      }
    }));
  }

  remove(id, user) {
    // query for a certain user
    let query = this.knex
                .select('id')
                .from('users')
                .where('users.username', user);

    // query has found a user, do the following...
    return query.then((rows) => {
      if(rows.length === 1){
        return this.knex('notes') // notes table (many-to-one)
              .where('id', id) // delete the specific message
              .del();
      } else {
        throw new Error ('No such user exists');
      }
    })
  };

}

module.exports = NoteService;