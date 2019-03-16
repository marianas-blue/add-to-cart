const db = require('../../database/db.js');
const cache = require('../../database/redis.js')

module.exports = {
  getProduct: (productId, callback) => {
    cache.get(productId, (err, reply) => {
      if (err) {
        console.log('ERR in Redis', err);
        callback(err, null);

      } else if (reply) {
        callback(null, reply);

      } else {
        const queryText = `select name, price, quantity, isprimeeligible, seller from products where products.id = ${productId};`;
        db.query(queryText, (err, data) => {
          if (err) {
            callback(err);
          }
          cache.set(productId, JSON.stringify(data), () => {
            callback(null, data);
          });
        });
      }
    });
  },

  addToCart: (userId, productId, quantity, callback) => {
    (async () => {
      const client = await db.connect();
    
      try {
        await client.query('BEGIN');
        const addCartText = `INSERT INTO carts (user_id) VALUES (${userId}) ON CONFLICT (user_id) DO NOTHING;`;
        await client.query(addCartText);
        const addProductsText = `INSERT INTO cart_items (cart_id, product_id, quantity) \
        SELECT id, ${productId}, ${quantity} FROM carts WHERE user_id = ${userId} \
        ON CONFLICT (cart_id, product_id) DO UPDATE SET quantity = EXCLUDED.quantity + cart_items.quantity;`;
        await client.query(addProductsText);
        const updateProductText = `UPDATE products SET quantity = quantity - ${quantity} WHERE products.id = ${productId}`;
        await client.query(updateProductText);
        await client.query('COMMIT');
      } catch (e) {
        await client.query('ROLLBACK');
        throw e
      } finally {
        client.release();
        callback(null);
      }
    })().catch(e => callback(e));
  },

  getUserInfo: (userId, callback) => {
    const queryText = `SELECT username, isprimemember FROM users WHERE id=${userId};`;
    db.query(queryText, (err, data) => {
      if (err) {
        callback(err);
      }
      callback(null, data);
    });
  },

  getCart: (userId, callback) => {
    const text = 'select cart_items.quantity, products.name from cart_items, carts, products \
    where carts.user_id = $1 and cart_items.cart_id = carts.id and product_id = products.id;'
    const values = [userId];
    db.query(text, values, (err, data) => {
      if (err) {
        return err;
      }
      callback(null, data);
    });
  },
};