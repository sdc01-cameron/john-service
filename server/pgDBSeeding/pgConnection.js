const { Pool, Client } = require('pg');
const client = new Client();

const pool = new Pool({
  user: 'jandy', // user 
  host: 'localhost', //IP address of the EC2 instance of postgres
  database: 'amazon_products',
  password: '',
  port: 5432,
});

module.exports.pool = pool;