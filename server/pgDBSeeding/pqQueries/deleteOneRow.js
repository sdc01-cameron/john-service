const pool = require('../pgConnection.js').pool;

const id = 100000000222;
let preDate = new Date();
pool.query(`DELETE FROM products WHERE id = ${id}`, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    let postDate = new Date();
    console.log('Query Time: ', (postDate - preDate));
    console.log(`Success In DELETE For ID ${id}`);
  }
  pool.end;
});
