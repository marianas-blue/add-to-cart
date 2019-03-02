const faker = require('faker');
const fs = require('fs');
const { Writable, Readable } = require('stream');

class InStream extends Readable {
  constructor(options) {
    super(options);
    this.id = 1;
    this.totalEntries = 5000000; // 5 million
    this.data = ['id, username, isPrimeMember, [shipping addresses]'];
  }

  _read() {
    if (this.id >= this.totalEntries) {
      this.push(null);
    } else {
      for (let i = 0; i < 10000; i++) {
        const user = [this.id, faker.internet.userName(), faker.random.boolean()];
        const addresses = [];
        for (let i = 0; i < Math.random() * 3; i++ ) {
          addresses.push(faker.name.findName());
          addresses.push(faker.address.streetAddress());
          addresses.push(faker.address.city());
          addresses.push(faker.address.stateAbbr());
          addresses.push(faker.address.zipCode());
          addresses.push(faker.phone.phoneNumber());
        }
        user.push(addresses);
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

/*
User Info:
	• username
	• isPrimeMember
	• [shipping addresses]

Shipping addresses:
	• full name
	• street address
	• **address line 2**
	• city
	• state
	• zip code
	• phone number

Product info:
	• id
	• product name 'Product <id>'
	• price .99 - $199.99
	• quantity 0 -1000
	• isPrimeEligible - boolean
	• location of product (zipcode) - zipcode
	• seller - string
*/
