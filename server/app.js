const express = require('express');
const app = express();
const port = 3005;

const Product = require('../server/database').Product;

app.use(express.json());
app.use(express.urlencoded());
app.use('/', express.static('public'));

app.get('/api/products/:id', (req, res) => {
  Product.find((err, products) => {
    if (err) {
      console.log('Error: ', err);
      res.send(404);
    } else {
      res.send(products[req.params.id]);
    }
  })
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})