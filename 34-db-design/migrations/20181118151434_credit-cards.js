
exports.up = function (knex, Promise) {
  return knex.schema.createTable('credit-cards', (table) => {
    table.increments(); // id
    table.bigInteger('card_number').unique(); // credit card numbers are not shared
    table.date('expiry_date');
    // our link to our accounts table - a user can have multiple cards - one-to-many
    table.integer('account_id').unsigned();
    table.foreign('account_id').references('accounts.id');
    table.timestamps(false, true);
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('credit-cards');
};