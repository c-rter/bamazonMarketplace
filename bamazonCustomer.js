var mysql = require("mysql");
var inquirer = require("inquirer");
var allResults;
var totalCost;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    queryItUp();

  });
  
  function queryItUp() {
    connection.query("SELECT * FROM products", function(err, res) {
    allResults = res;
    console.log();
    console.log("--------------------------------------------");
    console.log("--------------Welcome to Bamazon------------");
    console.log("--------------------------------------------");
      for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].item_id + " | " + res[i].department_name + " | " + res[i].product_name + " | $" + res[i].price + " | Qty: " + res[i].stock_quantity);
      }
      console.log("--------------------------------------------");
      console.log("--------------------------------------------");
      console.log("--------------------------------------------");
    });   
  }

inquirer.prompt([

  {
    type: "input",
    name: "itemID",
    message: "Please input the item ID of your intended purpose?"
  },

  {
    type: "input",
    name: "itemQuantity",
    message: "How many would you like to purchase?"
  },

  {
    type: "confirm",
    name: "canLeave",
    message: "Are you sure?"
  }

]).then(function(answer) {

  if (allResults[answer.itemID - 1].stock_quantity >= answer.itemQuantity) {

console.log("");
console.log("You have been approved.");
console.log("");
totalCost = allResults[answer.itemID - 1].price * answer.itemQuantity;
console.log("");
console.log("Your account has been charged: " + totalCost);
console.log("");

totalQuantity = allResults[answer.itemID - 1].stock_quantity - answer.itemQuantity;

var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
        {
            stock_quantity: totalQuantity
          },
          {
            item_id: answer.itemID
          }
    
    ],
    function(err, res) {
queryItUp();
    }
  );

  }
  else {
    console.log("");
console.log("Not enough product in stock.");
console.log("");

  }
});
