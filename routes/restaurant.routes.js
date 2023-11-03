const express = require("express");
const restaurantRouter = express.Router();
const { createRestaurant } = require("../controllers/restaurant.controller");

restaurantRouter.post("/", createRestaurant);

module.exports = restaurantRouter;
