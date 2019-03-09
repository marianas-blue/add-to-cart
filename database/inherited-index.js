const mongoose = require('mongoose');

const mongoDB = 'mongodb://chriztso:hikid123@ds041337.mlab.com:41337/chris';
mongoose.connect(mongoDB);

const productSchema = new mongoose.Schema({
  uniqueID: Number,
  price: Number,
  quantity: Number,
  isPrime: String,
  inCart: Number,
  cartQuantity: Number,
  imageURL: String,
});

const Product = mongoose.model('Product', productSchema);

Product.deleteMany({}, () => {
  console.log('DROPPED');
});

const trueOrFalse = [true, false];
const photos = [
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00001.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00002.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00003.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00004.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00005.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00006.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00007.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00008.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00009.jpeg',
  'https://s3.us-east-2.amazonaws.com/chrisfakephotos/File00010.jpeg',
];

for (let i = 0; i < 100; i += 1) {
  const randomIndex = Math.round(Math.random());
  const randomIndex2 = Math.floor(Math.random() * 9);
  const productToCreate = new Product({
    uniqueID: i,
    price: Number((Math.random() * 100).toFixed(2)),
    quantity: Number((Math.random() * 100).toFixed(0)),
    isPrime: trueOrFalse[randomIndex],
    inCart: false,
    cartQuantity: 0,
    imageURL: photos[randomIndex2],
  });

  productToCreate.save((err) => {
     if(err){
       console.log(err)
     }
  });
}


const getProduct = function (id, callback) {
  Product.find({ uniqueID: id }, (err, data) => {
    if (err) {
      return err;
    }
    callback(null, data);
  });
};


const addToCart = function (id, callback) {
  // need the number of items added to cart, need to get from drop down menu on select
  Product.updateOne({ uniqueID: id }, { $set: { inCart: 1 } }, (err, data) => {
    if (err) {
      return err;
    }
    callback(null, data);
  });
};

const itemsInCart = function (callback) {
  Product.find({ inCart: 1 }, (err, data) => {
    if (err) {
      return err;
    }
    callback(null, data);
  });
};

module.exports.getProduct = getProduct;
module.exports.addToCart = addToCart;
module.exports.itemsInCart = itemsInCart;
