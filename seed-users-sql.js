const faker = require('faker');
const fs = require('fs');
const { Writable, Readable } = require('stream');

class InStream extends Readable {
  constructor(options) {
    super(options);
    this.id = 1;
    this.totalEntries = 5000000; // 5 million
    this.data = ['id, username, isPrimeMember'];
  }

  _read() {
    if (this.id >= this.totalEntries) {
      this.push(null);
    } else {
      for (let i = 0; i < 50000; i++) {
        const user = [this.id, faker.internet.userName() + this.id % 100, faker.random.boolean()];
        this.data.push(user.join('|'));
        this.id++;
      }
      this.push(this.data.join('\n'));
      this.push('\n');
      this.data = [];
    }
  }
}

const fileStream = fs.createWriteStream('user-data-psql.csv'); // , {flag: "a"}
const source = new InStream;
source.pipe(fileStream);

/*

Table: Users
	id: bigserial
	username : char(60) primary key
	isPrimeMember : boolean

Table: Shipping Addresses
	user_id: REFERENCES users (id) ON DELETE CASCADE 
	full name : varchar(64)
	street address: varchar(64)
	city: varchar(64)
	state: char(2)
	zipcode: char(10)
	phone number: char(12)

CREATE TABLE products (
	id bigint primary key,
	name char(64),
	price money,
	quantity int,
	isPrimeEligible boolean,
	zipcode char(10),
	seller char(64)
	);

*/
