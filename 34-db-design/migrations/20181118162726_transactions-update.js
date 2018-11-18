
exports.up = function(knex, Promise) {
  knex.schema.alterTable('transactions', function(table) {
    // we may want to add the unique id of the credit card table entry to our transaction table - right now it has the unique credit card number itself
    table.integer('card_id').unsigned();
    table.foreign('card_id').references('credit-cards.id');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.alterTable('transactions', function(table) {
    table.dropColumn('card_id');
  })
};
