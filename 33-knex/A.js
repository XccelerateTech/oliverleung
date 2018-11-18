// Redo the transaction record from the file transaction record.

// Write Knex to buy and sell fruits according to the record.

// We still need to import our fs and CsvReadableStream
const fs = require('fs');
const CsvReadableStream = require('csv-reader');

const knex = require('knex')({
  client: 'postgresql',
  connection: {
    database: "fruits",
    user: "ollie",
    password: ""
  }
});

const inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

// simply means a function always returns a promise
async function commands() {
  let rows = [];

  inputStream.pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    // our rows [] is populated with the csv data
    .on('data', async (row) => {
      rows.push(row);
    })
    .on('end', async (data) => {
      // make sure to declare the transaction function as asynchronous
      knex.transaction(async (trx) => {
        for (let row of rows) {
          // define our row as having these table elements
          let [action, name, quantity] = row;
          // this is our stock check - happens specifically when the action is to SELL
          if (action === 'SELL') {
            // we use trx as the query builder - replace client.query from PgClient method
            let result = await trx.select('quantity').from('stock')
              .innerJoin('citrus', 'stock.citrus_id', 'citrus.id')
              .where('citrus.name', name).groupBy('quantity')
            // the link and check between our csv file and our table fruit quantities
            // // if the returned row's quantity is less than the quantity of the sell amount from our csv entry
            if (result[0].quantity < quantity) {
              throw new Error(`Not enough for ${name}!`);
            }

          }
          if (action === 'BUY') {
            await trx('stock')
              .whereIn('citrus_id', function () {
                // stock.citrus_id = citrus.id
                return this.select('id').from('citrus')
                // we chain a where here, as opposed to a andWhere outside, because the from('citrus') has already been established - name we are returning is from citrus table
                .where('name', name)
              })
              .increment('quantity', quantity);
            console.log(`You have bought ${quantity} ${name}s!`);
          } else {
            await trx('stock')
              .whereIn('citrus_id', function () {
                return this.select('id').from('citrus')
                .where('name', name)
              })
              // standard knex method
              .decrement('quantity', quantity);
            console.log(`You have bought ${quantity} ${name}s!`);
          }
        }
        // printout the queried table results
        let trxResult = await trx.select('*').from('stock')
        .innerJoin('citrus', 'stock.citrus_id', 'citrus.id');

        console.log(trxResult);
      })
    });
  
}

// call our function
commands();

// process.on('exit', (code) => {
//   console.log(`About to exit with code: ${code}`);
// })

// process.exit();