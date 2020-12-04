const pool = require('./queries1.js').pool;

pool.query('SELECT * FROM testtable', (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
    console.log(result.rows);
  }
  pool.end;
});