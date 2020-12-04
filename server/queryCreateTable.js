const pool = require('./queries1.js').pool;

pool.query(`CREATE TABLE
    testTable1(
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