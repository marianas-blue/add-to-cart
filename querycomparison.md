

*Query Comparison:*

**Get all information about a single user, including addresses**

cassandra:
  select * from users where id='x'
  8.801ms Judah_Boyer82
  8.508ms Domingo_Schuster4
  11.387ms Romaine27
  11.348ms Viva40
  9.397ms Kale_Mueller
  Avg: 9.888

postgreSQL:
  select * from users inner join addresses on (users.id = addresses.user_id and users.id = 'x');
  1335.138ms 400001
  1225.630ms 490000
  1046.408ms 40
  415.379ms 1
  421.881ms 377770
After indexing:
  7.493ms 4505001
  8.843ms 3905001
  7.228ms 2005
  7.434ms 4902005
  9.064ms 3500599
  Avg: 8.012

Difference: 9.888 - 8.012 = 1.876ms/query, 23.41% increase in time

**Get all product information for a single product**

cassandra:
  select * from products_indexed where name='Product x'
  11.375ms 9090000
  7.835ms 10090000
  7.908ms 9200570
  9.982ms 5002340
  8.937ms 1024441
  Avg: 9.207

postgreSQL:
  select * from products where name='Product z'
  104.435ms 900000
  104.257ms 970000
  103.373ms 970000
  110.551ms 700000
  106.589ms 1000000
  115.233ms 1080000
  select * from products where id='x'
  7.185ms 1020000
  5.950ms 1090550
  6.553ms 90550
  7.192ms 663
  6.373ms 5557433
  Avg: 6.651

Difference: 9.207 - 6.651 = 2.556ms/query, 38.43% increase in time. Nearly 40% slower.
