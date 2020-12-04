const pool = require('./pgConnection.js').pool;

pool.query('SELECT * FROM productsTable', (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
    // console.log(result.rows);
    console.log(result.rows.length);
  }
  pool.end;
});