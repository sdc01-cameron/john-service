const faker = require('faker');

const makeProducts = () => {
  let products = [];

  for (let i = 0; i < 10; i++) {
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

    products.push(product);
    console.log(product);
  }
  console.log(products);
};
makeProducts();

exports.makeProducts = makeProducts;
