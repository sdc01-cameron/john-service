const pool = require('../pgConnection.js').pool;

const id = 10000000;

pool.query(`SELECT * FROM products WHERE id > ${id}`, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Success In Querying ${result.rows.length} with ID ${id}`);
    console.log(result.rows);
  }
  pool.end;
});

