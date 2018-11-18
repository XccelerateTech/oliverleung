const fs = require('fs'); // ability to read and write from a file
const CsvReadableStream = require('csv-reader'); // there is no built in capabilities to read csv files
const pg = require('pg');

const config = {
  user: 'ollie',
  database: 'fruits',
  password: '',
  host: 'localhost',
  port: '5432',
  max: 10,
  idleTimeoutMillis: 3000
}

// configure our pg to connect to our db server
const client = new pg.Client(config);
// allow our app to read the csv file
const inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

// simply means a function always returns a promise
async function commands() {
  // function makes js wait until the promise settles and returns its result
  await client.connect();

  let rows = [];

  inputStream.pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    // our rows [] is populated with the csv data
    .on('data', async (row) => {
      rows.push(row);
    })
    .on('end', async (data) => {
      // .query() allows us to run SQL command
      await client.query('BEGIN');
      try {
        for (let row of rows) {
          // define our row as having these table elements
          let [action, name, quantity] = row;
          // this is our stock check - happens specifically when the action is to SELL
          if (action === 'SELL') {
            let result = await client.query(`
              SELECT quantity 
              FROM stock INNER JOIN citrus ON stock.citrus_id = citrus.id 
              WHERE citrus.name = $1 GROUP BY quantity;`, [name]); // the link and check between our csv file and our table fruit quantities
            // if the returned row's quantity is less than the quantity of the sell amount from our csv entry
            if (result.rows[0].quantity < quantity) {
              throw new Error(`Not enough for ${name}!`);
            }

          }
          if (action === 'BUY') {
            await client.query(`
              UPDATE stock SET quantity = quantity + $1
              FROM citrus
              WHERE stock.citrus_id = citrus.id AND name =$2`, [quantity, name]); // this is how the properties in the csv are linked to our table
            console.log(`You have bought ${quantity} ${name}s!`);
          } else {
            // there are only two states for action, so our SELL occurs if its not a buy
            await client.query(`
              UPDATE stock SET quantity = quantity - $1
              FROM citrus
              WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
            console.log(`${quantity} ${name}s sold!`);
          }
        }
        // the rest of the transaction actions
        await client.query('COMMIT');
      } catch (e) {
        await client.query('ROLLBACK')
        // to actually return an error message, should we receive one
        console.log(e);
      }
    });
}

// call our function
commands();