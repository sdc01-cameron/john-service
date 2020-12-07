const pool = require('./pgConnection.js').pool;

pool.query(`
  COPY products
  FROM '/Users/jandy/Work/sdc/john-service/server/pgDBSeeding/products.csv'
  DELIMITER '|'
  `, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
  }
  pool.end;
});

