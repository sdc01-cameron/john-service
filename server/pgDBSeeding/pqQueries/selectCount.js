const pool = require('../pgConnection.js').pool;

let preDate = new Date();

pool.query('SELECT COUNT(*) FROM products', (error, result) => {
  if (error) {
    console.log('Error In Select Count: \n', error);
  } else {
    let postDate = new Date();
    console.log(postDate - preDate);
    console.log('Success in Select Count:\n', result.rows[0].count);
  }
  pool.end;
});