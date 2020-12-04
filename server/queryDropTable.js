const pool = require('./queries1.js').pool;

pool.query(`
    DROP TABLE testtable
  `, (error, result) => {
  if (error) {
    console.log('Error in Table Drop: ');
    console.log(error);
  } else {
    console.log('Success: Table Dropped');
  }
  pool.end;
});

