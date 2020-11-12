const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // Set schema
  const productSchema = new mongoose.Schema({
    name:  String,
    price: Number,
    prime: Boolean,
    returnable: Boolean,
    flavor: String,
    ingredients: String,
    brand: String,
    sensitivity: String,
    ingredient_information: String,
    about: String,
    ratings: [{user: String, rating: Number, rating_date: Date}]
  })
  // compile schema to a model
  const Product = mongoose.model('Product', productSchema);
});