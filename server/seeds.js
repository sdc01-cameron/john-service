const faker = require('faker');
const Product = require('../server/database');

const makeProducts = () => {

  for (let i = 0; i < 100; i++) {
    let product = {};
    product.name = faker.commerce.productName();
    product.price = faker.commerce.product();
    product.prime = true;
    product.returnable = false;
    product.ingredients = faker.commerce.productMaterial();
    product.flavor = faker.commerce.color();
    product.sensitivity = faker.commerce.productMaterial();
    product.ingredient_info = faker.commerce.productDescription();
    product.about = faker.commerce.productDescription();
    product.ratings = [{username: faker.name.firstName(), rating: faker.random.number(), rating_date: faker.date.past()}];

    Product.create(product, (err, doc) {
      if (err) {
        console.log('Error: ', err);
      }
      console.log('Document was inserted');
    });
  }


};


exports.makeProducts = makeProducts;
