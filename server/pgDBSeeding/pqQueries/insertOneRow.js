const pool = require('../pgConnection.js').pool;

const insertOne = (req, res) => {
  const {name, price, prime, returnable, flavor, ingredients, brand, sensitivity, ingredient_info, about, ratings_avg} = req.body;

  pool.query(`INSERT INTO products(name, price, prime, returnable, flavor, ingredients, brand, sensitivity, ingredient_info, about, ratings_avg) VALUES (
    '${name}',
    ${price},
    ${prime},
    ${returnable},
    '${flavor}',
    '${ingredients}',
    '${brand}',
    '${sensitivity}',
    '${ingredient_info}',
    '${about}',
    ${ratings_avg})`, (error, result) => {
    if (error) {
      console.log('error in post');
    } else {
      console.log('Success In Insert Into ID');
      res.send('success in POST');
    }
    pool.end;
  });
};

module.exports.insertOne = insertOne;
