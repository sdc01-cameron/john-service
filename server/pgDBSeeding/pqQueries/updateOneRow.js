const pool = require('../pgConnection.js').pool;

const id = 10000001;
let preDate = new Date();
pool.query(`UPDATE products SET name = 'we got a new name here folks' WHERE id = ${id}`, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    let postDate = new Date();
    console.log('Query Time: ', (postDate - preDate));
    console.log(`Success In UPDATE ID ${id}`);
  }
  pool.end;
});
