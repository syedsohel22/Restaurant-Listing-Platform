const express = require("express");
const restaurantRouter = express.Router();
const {
  createRestaurant,
  getAllRestaurants,
} = require("../controllers/restaurant.controller");

restaurantRouter.post("/", createRestaurant);
restaurantRouter.get("/", getAllRestaurants);

module.exports = restaurantRouter;
