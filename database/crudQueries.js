const { Client } = require('pg');

const client = new Client({
  user: 'sdc_user',
  database: 'photoGallery',
  port: 3005,
});

client
  .connect()
  .then(() => console.log('connected to postgreSQL successfully!'))
  .then(() => client.query('SELECT * FROM gallery WHERE listing_id = 1 '))
  .then((results) => console.table(results.rows))
  .catch((e) => console.log(e))
  .finally(() => client.end());
