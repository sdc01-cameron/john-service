const express = require('express');
const app = express();
const port = 3005;

app.get('/api/products/:id/product', (req, res) => {
  res.send('Product info here');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})