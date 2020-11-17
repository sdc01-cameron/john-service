const faker = require('faker');
const mongoose = require('mongoose');
const {Product} = require('../server/database');
//const db = require('../server/database');

mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true});
const db = mongoose.connection;

db.dropDatabase(
  console.log(`database dropped.`)
);


const makeProducts = () => {

  for (let i = 0; i < 100; i++) {
    let product = {};
    product._id = i;
    product.name = faker.commerce.productName();
    product.price = faker.finance.amount();
    product.prime = true;
    product.returnable = false;
    product.ingredients = faker.commerce.productMaterial();
    product.flavor = faker.commerce.color();
    product.sensitivity = faker.commerce.productMaterial();
    product.brand = faker.company.companyName();
    product.ingredient_info = faker.commerce.productDescription();
    product.about = faker.commerce.productDescription();
    let avg = Math.floor(Math.random() * 5) + 1;
    product.ratings_avg = avg;

    Product.create(product, (err, doc) => {
      if (err) {
        console.log('Error: ', err);
      }
    });
    if (i === 100) {
      mongoose.disconnect();
    }
  }

  console.log('All documents were created!')
};
makeProducts();

exports.makeProducts = makeProducts;
