const pool = require('./pgConnection.js').pool;

pool.query(`CREATE TABLE
    productsTable(
    id INTEGER,
    name TEXT,
    price FLOAT,
    prime BOOLEAN,
    returnable BOOLEAN,
    flavor TEXT,
    ingredients TEXT,
    brand TEXT,
    sensitivity TEXT,
    ingredient_info TEXT,
    about TEXT,
    ratings_avg FLOAT
  )`, (error, result) => {
  if (error) {
    console.log('error');
    console.log(error);
  } else {
    console.log('success');
    console.log(result.rows);
  }
  pool.end;
});