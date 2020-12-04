const pool = require('./pgConnection.js').pool;

pool.query(`
    DROP TABLE productsTable
  `, (error, result) => {
  if (error) {
    console.log('Error in Table Drop: ');
    console.log(error);
  } else {
    console.log('Success: Table Dropped');
  }
  pool.end;
});

