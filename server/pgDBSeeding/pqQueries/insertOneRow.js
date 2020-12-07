const pool = require('../pgConnection.js').pool;

const id = 10000001;
let preDate = new Date();
pool.query(`INSERT INTO products(id, name, price, prime, returnable, flavor, ingredients, brand, sensitivity, ingredient_info, about, ratings_avg) VALUES (${id}, 'Random Name', 22.34, true, true, 'hard', 'blue', 'hot', 'sensitive', 'random text random text inserted into the file', 'about the product to get people interested into the product', 3)`, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    let postDate = new Date();
    console.log('Query Time: ', (postDate - preDate));
    console.log(`Success In Insert Into ID ${id}`);
    // console.log(result.rows);
  }
  pool.end;
});
