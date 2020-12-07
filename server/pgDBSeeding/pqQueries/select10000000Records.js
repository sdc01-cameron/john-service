const pool = require('../pgConnection.js').pool;

let preDate = new Date();

pool.query('SELECT * FROM products', (error, result) => {
  if (error) {
    console.log(error);
  } else {
    let postDate = new Date();
    console.log('Query Time: ', (postDate - preDate));
    console.log('Success In Querying ', result.rows.length, ' Rows');
  }
  pool.end;
});