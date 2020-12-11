const pool = require('../pgConnection.js').pool;

const updateOne = (req, res) => {
  const newName = req.body.name;
  const id = req.params.id;
  console.log(newName);
  pool.query(`UPDATE products SET name = '${newName}' WHERE id = ${id}`, (error, result) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log(`Success In UPDATE ID ${id}`);
      res.send('Successful Update');
    }
    pool.end;
  });
};

module.exports.updateOne = updateOne;
