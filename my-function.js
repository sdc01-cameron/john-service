'use strict';

// Make sure to "npm install faker" first.
const faker = require('faker');

const generateRandomData = (userContext, events, done) => {
  // generate data with Faker:
  const name = faker.commerce.productName();
  const price = faker.finance.amount();
  const prime = faker.random.boolean();
  const returnable = faker.random.boolean();
  const flavor = faker.commerce.color();
  const ingredients = faker.commerce.productMaterial();
  const brand = Faker.internet.password();
  const sensitivity = faker.commerce.productMaterial();
  const ingredient_info = faker.commerce.productDescription();
  const about = faker.commerce.productDescription();
  const ratings_avg = faker.random.number({'max': 5});
  // add variables to virtual user's context:
  userContext.vars.name = name;
  userContext.vars.price = price;
  userContext.vars.prime = prime;
  userContext.vars.returnable = returnable;
  userContext.vars.flavor = flavor;
  userContext.vars.ingredients = ingredients;
  userContext.vars.brand = brand;
  userContext.vars.sensitivity = sensitivity;
  userContext.vars.ingredient_info = ingredient_info;
  userContext.vars.about = about;
  userContext.vars.ratings_avg = ratings_avg;
  // continue with executing the scenario:
  return done();
};

module.exports = {
  generateRandomData
};