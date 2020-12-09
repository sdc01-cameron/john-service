const pool = require('./pgConnection.js').pool;

pool.query(`
COPY products (name, price, prime, returnable, flavor, ingredients, brand, sensitivity, ingredient_info, about, ratings_avg) FROM '/Users/jandy/Work/sdc/john-service/server/pgDBSeeding/products.csv' DELIMITER '|';
`, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
  }
  pool.end;
});

