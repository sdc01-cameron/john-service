const { Pool, Client } = require('pg');
const client = new Client();

const pool = new Pool({
  user: 'jandy',
  host: 'localhost',
  database: 'amazon_products',
  password: '',
  port: 5432,
});

module.exports.pool = pool;