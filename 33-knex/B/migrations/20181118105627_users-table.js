
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string("username");
    table.string("email");
    table.string("password");
    table.boolean("active");
    // timestampS creates both 'created at' and 'updated at' columns on the db
    table.timestamps(false, true);
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
