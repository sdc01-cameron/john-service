const pool = require('./pgConnection.js').pool;

pool.query(`CREATE TABLE
    products(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    price FLOAT,
    prime BOOLEAN,
    returnable BOOLEAN,
    flavor VARCHAR (25),
    ingredients VARCHAR (25),
    brand VARCHAR (50),
    sensitivity VARCHAR (50),
    ingredient_info VARCHAR (250),
    about VARCHAR (250),
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