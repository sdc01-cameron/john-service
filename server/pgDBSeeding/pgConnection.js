const { Pool, Client } = require('pg');
const client = new Client();

const pool = new Pool({
  user: 'postgres', // user
  host: '54.193.24.45', //IP address of the EC2 instance of postgres
  database: 'amazon_products',
  password: 'password',
  port: 5432,
});

module.exports.pool = pool;