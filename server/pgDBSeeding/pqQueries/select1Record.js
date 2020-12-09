const pool = require('../pgConnection.js').pool;

// const id = 10000001;

const selectOne = (req, res) => {
  const id = req.params.id;
  pool.query(`SELECT * FROM products WHERE id = ${id}`, (error, result) => {
    if (error) {
      console.log(error);
      res.send(404);
    } else {
      console.log(`Success In Querying ${result.rows.length} with ID ${id}`);
      console.log(result.rows);
      res.send(result.rows);
    }
    pool.end;
  });
};

// pool.query(`SELECT * FROM products WHERE id = ${id}`, (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     let postDate = new Date();
//     console.log('Query Time: ', (postDate - preDate));
//     console.log(`Success In Querying ${result.rows.length} with ID ${id}`);
//     console.log(result.rows);
//   }
//   pool.end;
// });

module.exports.selectOne = selectOne;
