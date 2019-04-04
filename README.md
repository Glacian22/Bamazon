# Bamazon

It's like Amazon...except less so. Bamazon is a CLI app that connects to a MySQL database of products, and allows the user to "buy" items, subtracting from the available quantity. It robustly handles invalid purchase quantities and item numbers, with only a reasonable level of snark.

### Usage
* Clone the repo
* Run `npm install` to get the dependencies
* Set up the database by running the schema file:
  * `mysql -uroot -p`
  * `source bamazon.sql`
  * `quit`
 * Then just `node bamazonCustomer.js` as in the demo below

### Technologies
* node
* inquirer
* mysql

### Demo

[![Bamazon-demo.gif](https://s2.gifyu.com/images/Bamazon-demo.gif)](https://gifyu.com/image/3Yqg)
