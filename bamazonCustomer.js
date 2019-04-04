let inquirer = require("inquirer")
let mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runBamazonCustomer();
});

var keepRunning = true;
function runBamazonCustomer() {
    var query = connection.query(
        "SELECT id, product_name, price FROM products",

        function (err, res) {
            if (err) {
                console.log("ERROR:", err)
                return;
            } else {
                //turn the array into an object so we won't see confusing "index" starting from 0 and "id" starting from 1 in the table
                var converted = {};
                for (var i = 0; i < res.length; i++) {
                    var obj = {};
                    obj.product_name = res[i].product_name;
                    obj.price = res[i].price;
                    converted[res[i].id] = obj;
                }
                console.table(converted);
                purchase();
            }
        }
    )
}

function purchase() {
    inquirer.prompt([{
        type: "input",
        name: "id",
        message: "Enter the index of the item you would like to buy\n",
        validate: function (value) {
            if (parseFloat(value)) {
                return true
            }
            return false;
        }
    },
    {
        type: "input",
        name: "quantity",
        message: "How many would you like\n",
        validate: function (value) {
            if (parseFloat(value)) {
                return true
            }
            return false;
        }
    }
    ]).then(function (input) {
        console.log("Finishing your order...");
        finishOrder(input.id, input.quantity)
    })

}

function finishOrder(id, quantity) {
    var query = connection.query(
        "SELECT * FROM products WHERE id = " + id,

        function (err, res) {
            if (err) {
                connection.end();
                return console.log("ERROR:", err)
            } else {
                if (res[0].stock_quantity < quantity) {
                    console.log("Sorry, we don't have enough, cancelling order");
                    connection.end();

                } else {
                    updateDB(id, res[0].stock_quantity - quantity);
                }
            }
        }
    )

}

function updateDB(id, newQuantity) {
    var query = connection.query(
        "UPDATE products SET stock_quantity = " + newQuantity + " WHERE id = " + id,

        function (err, res) {
            if (err) {
                connection.end();
                return console.log("ERROR:", err);
            } else {
                console.log("Purchase successful, thank you! See you soon!")
                connection.end();
            }
        })
}