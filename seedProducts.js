const faker = require('faker');
const fs = require('fs');
const { Writable, Readable } = require('stream');

class InStream extends Readable {
  constructor(options) {
    super(options);
    this.id = 1;
    this.data = ['id, name, price, quantityAvailable, isPrimeEligible, location'];
  }

  _read() {
    if (this.id >= 10000000) {
      this.push(null);
    } else {
      for (let i = 0; i < 10000; i++) {
        const product = [this.id, 'Product ' + this.id, (Math.random() * 100).toFixed(2), Math.floor(Math.random() * 1000), faker.random.boolean(), faker.address.zipCode()];
        this.data.push(product.join(','));
        this.id++;
      }
      this.push(this.data.join('\n'));
      this.data = [];
    }
  }
}

const fileStream = fs.createWriteStream('file'); // , {flag: "a"}
const source = new InStream;
source.pipe(fileStream);