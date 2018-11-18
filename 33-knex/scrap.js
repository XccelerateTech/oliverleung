.on('end', async (data) => {
  knex.transaction(function (trx) {
    for (let row of rows) {
      // define our row as having these table elements
      let [action, name, quantity] = row;
      // this is our stock check - happens specifically when the action is to SELL
      if (action === 'SELL') {
        // we use trx as the query builder - replace client.query from PgClient method
        let result = await trx.select('quantity').from('stock')
          .innerJoin('citrus', 'stock.citrus_id', 'citrus.id')
          .where('citrus.name', name).groupBy(quantity);
        // the link and check between our csv file and our table fruit quantities
        // // if the returned row's quantity is less than the quantity of the sell amount from our csv entry
        if (result.rows[0].quantity < quantity) {
          throw new Error(`Not enough quantity of ${name}s!`);
        }
      }
      if (action === 'BUY') {
        await trx('stock')
          .whereIn('citrus_id', function () {
            // stock.citrus_id = citrus.id
            return this.select('id').from('citrus')
          })
          .andWhere('citrus.name', name)
          .increment('quantity', quantity);
        // (`
        //   UPDATE stock SET quantity = quantity + $1
        //   FROM citrus
        //   WHERE stock.citrus_id = citrus.id AND name =$2`, [quantity, name]); // this is how the properties in the csv are linked to our table
        console.log(`You have bought ${quantity} ${name}s!`);
      } else {
        await trx('stock')
          .whereIn('citrus_id', function () {
            return this.select('id').from('citrus')
          })
          .andWhere('citrus.name', name)
          .decrement('quantity', quantity);
        console.log(`You have bought ${quantity} ${name}s!`);
      }

    }
  })
});