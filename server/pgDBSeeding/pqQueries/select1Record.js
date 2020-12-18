const pool = require('../pgConnection.js').pool;


const selectOne = (req, res) => {
  const id = req.params.id;

  pool.query(`SELECT * FROM products WHERE id = ${id}`, (error, result) => {
    if (error) {
      console.log('error: ', error);
      res.send('error');
    } else {
      console.log(`Success in Querying ${result.rows.length} with ID ${id}`);
      console.log(result.rows);
      res.send(result.rows[0]);
    }
    pool.end;
  });
};

module.exports.selectOne = selectOne;
