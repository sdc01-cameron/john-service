const pool = require('../pgConnection.js').pool;
const redis = require('../../redis.config');

const selectOne = (req, res) => {
  const id = req.params.id;
  redis.get(id, (error, result) => {
    if (error) {
      console.log('error in redis: ', error);
      res.send('error in redis');
      return;
    }
    if (result) {
      var resultParsed = JSON.parse(result);
      console.log('success in pulling from redis');
      console.log(resultParsed);
      res.send(resultParsed);
    } else {
      pool.query(`SELECT * FROM products WHERE id = ${id}`, (error, result) => {
        if (error) {
          console.log('error in DB: ', error);
          res.send('error in DB');
        } else {
          console.log(`Success In Querying ${result.rows.length} with ID ${id}`);
          var resultStringify = JSON.stringify(result.rows[0]);
          redis.set(id, resultStringify, (error, result) => {
            if (error) {
              console.log('error in redis set');
              res.send('error in redis');
              return;
            }
            console.log('added to redis');
          });
          res.send(result.rows[0]);
        }
        pool.end;
      });
    }
  });
};

module.exports.selectOne = selectOne;
