
exports.up = function (knex, Promise) {
  return knex.schema.createTable('transactions', (table) => {
    // we want to link this table to both account id and credit-cards id
    table.increments();
    // add a transaction balance
    table.integer('balance');
    table.bigInteger('creditCardNumber').unsigned(); // not unique, because we are tracking transactions - one card can have multiple transactions
    table.foreign('creditCardNumber').references('credit-cards.card_number');
    table.integer('account_id').unsigned(); // our link to show the user accounts
    table.foreign('account_id').references('accounts.id');
    table.timestamps(false, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('transactions');
};
