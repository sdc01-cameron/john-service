const fs = require('fs');
const path = require('path');
const faker = require('faker');

const locationFile = path.join(__dirname, '/exampleWrite.csv');
const writeStream = fs.createWriteStream(locationFile, 'utf8');

const looperWriteDirect = (length) => {
  let product = {};
  for (var i = 0; i < length; i++) {
    let avg = Math.floor(Math.random() * 5) + 1;
    product.id = i + 1;
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
    product.ratings_avg = avg;
    if (i % 100 === 0) {
      // console.log('Completed: ', i);
    }
    writeStream.write(product.name + '|' + product.price + '|' + product.prime + '|' + product.returnable + '|' + product.ingredients + '|' + product.flavor + '|' + product.sensitivity + '|' + product.brand + '|' + product.ingredient_info + '|' + product.about + '|' + product.ratings_avg + '\n');
  }

  writeStream.end();

};

looperWriteDirect(100);




