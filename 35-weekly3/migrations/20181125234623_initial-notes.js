
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes',(table) => {
    table.increments();
    table.string("content");
    table.integer('user_id').unsigned(); // only positive integers - many-to-one relationship
    table.foreign('user_id').references('users.id'); // our link between the two tables
    table.timestamps(false,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
