const express = require('express');
const cors = require('cors');
const path = require('path');
const Product = require('./Models/product.js');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/cart/bundle', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/bundle.js'));
});

app.get('/api/cart/product/:id', (req, res) => {
  Product.getProduct(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).send(data);
  });
});

app.get('/api/cart/users/:userId', (req, res) => {
  Product.getUserInfo(req.params.userId, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).send(data);
  });
});

app.post('/api/cart/:userId', (req, res) => {
  Product.addToCart(req.params.userId, req.body.productId, req.body.quantity, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(201).send();
  })
});

app.get('/api/cart/:userId', (req, res) => {
  Product.getCart(req.params.userId, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).send(data);
  })
});

app.use('*', (req, res) => {
  res.sendFile(`/client/dist/index.html`, {'root': `${__dirname}/../`});
});

const PORT = 3000;

app.listen(PORT, console.log(`listening at ${PORT}`));
