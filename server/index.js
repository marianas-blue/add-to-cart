const express = require('express');
const cors = require('cors');
const path = require('path');
const Product = require('./Models/product.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../client/dist`));


app.get('/api/product/:id', (req, res) => {
  Product.getProduct(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).send(data);
  });
});

app.get('/api/users/:userId', (req, res) => {
  Product.getUserInfo(req.params.userId, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).send(data);
  });
});

app.post('/api/cart', (req, res) => {
  Product.addToCart(req.body.userId, req.body.productId, req.body.quantity, (err, data) => {
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


const PORT = 3002;

app.listen(PORT, console.log('listening at 3002'));
// app.put('/product/:id', (req, res) => {
//   const idToSearch = req.params.id;
//   addToCart(idToSearch, (err, data) => {
//     if (err) {
//       res.status(400).send();
//       return;
//     }
//     res.status(200).send(data);
//   });
// });

// app.get('/addtocart', (req, res) => {
//   itemsInCart((err, data) => {
//     if (err) {
//       res.status(400).send();
//       return;
//     }
//     res.status(200).send(data);
//   });
// });

