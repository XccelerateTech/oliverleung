
exports.up = function (knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
    table.unique('username'); // adds this column property to username
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
    table.dropUnique('username');
  })
};
