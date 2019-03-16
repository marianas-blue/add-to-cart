const redis = require('redis');
require('./config.js');

const client = redis.createClient(process.env.CACHE_PORT, process.env.CACHE_HOST);

module.exports = client;