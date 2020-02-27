var express = require("express");
var router = express.Router();

let serverGroceryArray = [];

var GroceryItem = function(
  pItemName,
  pItemType,
  pPriority,
  pItemCost,
  pQuantity
) {
  this.ItemName = pItemName;
  this.ItemType = pItemType;
  this.Priority = pPriority;
  this.ItemCost = pItemCost;
  this.Quantity = pQuantity;
};

serverGroceryArray.push(new GroceryItem("Milk", "Dairy", "Low", 3.0, 1));
serverGroceryArray.push(new GroceryItem("Chicken", "Meat", "High", 8.25, 3));
serverGroceryArray.push(new GroceryItem("Basil", "Vegetable", "Low", 2.25, 2));
serverGroceryArray.push(new GroceryItem("Berries", "Fruit", "Low", 3.5, 1));
serverGroceryArray.push(new GroceryItem("Fillet", "Meat", "Low", 15.75, 2));

router.post("/addGrocery", function(req, res) {
  console.log(req.body);
  serverGroceryArray.push(req.body);
  console.log(serverGroceryArray);
  res.status(200).send(JSON.stringify("success"));
});

router.get("/sortOrder", function(req, res) {
  res.json(serverGroceryArray);
});

module.exports = router;
