const pool = require('./pgConnection.js').pool;

pool.query(`CREATE TABLE
    products(
    id INTEGER PRIMARY KEY,
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
    console.log('Error in Table Creation:');
    console.log(error);
  } else {
    console.log('Success: Table Created');
  }
  pool.end;
});