const faker = require('faker');
const fs = require('fs');
const { Writable, Readable } = require('stream');
const TimeUuid = require('cassandra-driver').types.TimeUuid;

class InStream extends Readable {
  constructor(options) {
    super(options);
    this.id = 1;
    this.totalEntries = 5000000; // 5 million
    this.data = ['username,isprimemember,userid,addresses'];
  }

  _read() {
    if (this.id >= this.totalEntries) {
      this.push(null);
    } else {
      for (let i = 0; i < 10000; i++) {
        const user = [faker.internet.userName()];
        user.push(faker.random.boolean());
        user.push(TimeUuid.now());

        let addressesString = '"{';
        const addresses = [];
        for (let i = 0; i < Math.random() * 3; i++ ) {
          let fullname = faker.name.findName().replace(/(['"])/g, '');
          addresses.push(`'${fullname}': {fullname: '${fullname}', street: '${faker.address.streetAddress().replace(/(['"])/g, '')}', city: '${faker.address.city().replace(/(['"])/g, '')}', state: '${faker.address.stateAbbr()}', zipcode: '${faker.address.zipCode()}', phone: '${faker.phone.phoneNumberFormat()}'}`);
          // addresses.push(faker.address.streetAddress());
          // addresses.push(faker.address.city());
          // addresses.push(faker.address.stateAbbr());
          // addresses.push(faker.address.zipCode());
          // addresses.push(faker.phone.phoneNumber());
        }
        addressesString += addresses.join(',');
        addressesString += '}"';
        user.push(addressesString);
        
        this.data.push(user.join(','));
        this.id++;
      }
      this.push(this.data.join('\n'));
      this.push('\n');
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
