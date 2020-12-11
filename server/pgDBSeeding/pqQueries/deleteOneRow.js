const pool = require('../pgConnection.js').pool;

const deleteOne = (req, res) => {
  const id = req.params.id;
  pool.query(`DELETE FROM products WHERE id = ${id}`, (error, result) => {
    if (error) {
      console.log(error);
      res.send(404);
    } else {
      console.log(`Success In DELETE For ID ${id}`);
      res.send('Delete Successful');
    }
    pool.end;
  });
};

module.exports.deleteOne = deleteOne;
