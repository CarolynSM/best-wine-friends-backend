var express = require("express");
var cors = require("cors");
var foodFile = require("./food");
var food = foodFile.food;
var flavorsFile = require("./flavors.js");
var flavors = flavorsFile.flavors;
var wineFile = require("./wine.js");
var wine = wineFile.wine;
var app = express();
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

// function matchFlavorToFood(flavors, foodId) {
//   return flavors.filter(function(item) {
//     return item.ingredientId == foodId;
//   });
// }
//
// function mergeData(food, flavors) {
//   var test = food.map(function(foodItem) {
//     return {
//       id: foodItem.id,
//       ingredient: foodItem.ingredient,
//       flavors: matchFlavorToFood(flavors, foodItem.id)
//     };
//   }); console.log(test[0].flavors);
//   return test;
// }
//
// mergeData(food, flavors);

app.get("/food", (request, response) => {
  response.json(food);
});

app.get("/wine",  (request, response) => {
  response.json(wine);
});

app.get("/flavors", (request, response) => {
  response.json(flavors);
});

// app.get("/pairings", function(request, response) {
//   this is where the merged data will live
// });

app.post("/wine", (request, response) => {
  wine.push(request);
});


app.listen(process.env.PORT || 3000);
