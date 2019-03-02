const faker = require('faker');
const fs = require('fs');
const { Writable, Readable } = require('stream');

class InStream extends Readable {
  constructor(options) {
    super(options);
    this.id = 1;
    this.totalEntries = 10000000;
    this.data = ['id, name, zipcode, isPrimeMember, [wishlists]'];
  }

  _read() {
    if (this.id >= this.totalEntries) {
      this.push(null);
    } else {
      for (let i = 0; i < 10000; i++) {
        const user = [this.id, faker.name.findName(), faker.address.zipCode(), faker.random.boolean()];
        const wishlist = [];
        for (let i = 0; i < Math.random() * 3; i++ ) {
          wishlist.push(faker.lorem.word());
        }
        user.push(wishlist);
        this.data.push(user.join(','));
        this.id++;
      }
      this.push(this.data.join('\n'));
      this.data = [];
    }
  }
}

const fileStream = fs.createWriteStream('user-data.csv'); // , {flag: "a"}
const source = new InStream;
source.pipe(fileStream);
