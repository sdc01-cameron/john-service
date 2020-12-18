const newrelic = require('newrelic');

const express = require('express');
const app = express();
const port = 4002;
const selectOne = require('./pgDBSeeding/pqQueries/select1Record.js').selectOne;
const insertOne = require('./pgDBSeeding/pqQueries/insertOneRow.js').insertOne;
const deleteOne = require('./pgDBSeeding/pqQueries/deleteOneRow.js').deleteOne;
const updateOne = require('./pgDBSeeding/pqQueries/updateOneRow.js').updateOne;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static('public'));


app.get('/loaderio-3939c4eda17d7e54917e378b6b07c13e', (req, res) => {
  res.send('loaderio-3939c4eda17d7e54917e378b6b07c13e');
});

app.get('/api/products/:id', (req, res) => {
  selectOne(req, res);
});

app.get('/api/products/all', (req, res) => {
  Product.find({}, (err, product) => {
    if (err) {
      console.log('Error in GET (full collection): ', err);
      res.send(404);
    } else {
      console.log('Success in Get (full collection)');
      res.send(product);
    }
  });
});

app.post('/api/products', (req, res) => {
  insertOne(req, res);
});

app.delete('/api/products/:id', (req, res) => {
  deleteOne(req, res);
});

app.put('/api/products/:id', (req, res) => {
  updateOne(req, res);
});


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

// const express = require('express');
// const app = express();
// const port = 3002;

// const Product = require('../server/database').Product;

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use('/', express.static('public'));

// app.get('/api/products/:id', (req, res) => {
//   Product.findById(req.params.id, (err, product) => {
//     if (err) {
//       console.log('Error in GET (single document):', err);
//       res.send(404);
//     } else {
//       console.log('Success in Get (single document)');
//       res.send(product);
//     }
//   });
// });

// app.get('/api/products/all', (req, res) => {
//   Product.find({}, (err, product) => {
//     if (err) {
//       console.log('Error in GET (full collection): ', err);
//       res.send(404);
//     } else {
//       console.log('Success in Get (full collection)');
//       res.send(product);
//     }
//   });
// });

// app.post('/api/products', (req, res) => {
//   console.log('req.body is: ', req.body);
//   var newProduct = new Product(req.body);
//   newProduct.save((err, insertion) => {
//     if (err) {
//       console.log('Error in Post occurred: ', err);
//       res.send('Error in Post occurred');
//       return;
//     }
//     console.log('Success in Post');
//     res.send(insertion);
//   });
// });

// app.delete('/api/products/:id', (req, res) => {
//   Product.findByIdAndRemove(req.params.id, (err, deletedRecord) => {
//     if (err) {
//       console.log('Error in Delete occurred: ', err);
//       res.send('Error in Delete occurred');
//       return;
//     }
//     console.log('Success in Delete');
//     res.send(deletedRecord);
//   });
// });

// app.put('/api/products/:id', (req, res) => {
//   Product.updateOne({_id: req.params.id}, req.body, (err, updatedRecord) => {
//     if (err) {
//       console.log('Error in Put occurred: ', err);
//       res.send('Error in Put occurred');
//       return;
//     }
//     console.log('Success in Put');
//     res.send(updatedRecord);
//   });
// });


// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`);
// });