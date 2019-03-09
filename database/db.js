const { Pool } = require('pg');

const pool = new Pool({
  user: 'kevin',
  host: 'localhost',
  database: 'add-to-cart',
  password: '',
  port: 5432,
})

module.exports = pool;
