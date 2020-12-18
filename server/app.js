const newrelic = require('newrelic');

const express = require('express');
const app = express();
const port = 4002;
const redis = require('./redis.config.js');
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
  console.log(`Listening at redis http://localhost:${port}`);
});
