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
        "SELECT * FROM bamazon_db",
        function (err, res) {
            if (err) {
                console.log("ERROR:", err)
                return;
            }else{
                console.table(res);
            }
        }
    )
}

