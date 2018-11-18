
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookings',(table)=>{
    table.increments();
    table.date();
    table.string('remark');
    // if first argument is true, it reverts to timeStamp (singular method)
    table.timeStamps(false,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bookings');
  })
};
