const express = require("express");
const restaurantRouter = express.Router();
const {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
} = require("../controllers/restaurant.controller");

restaurantRouter.post("/", createRestaurant);
restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.get("/:id", getRestaurantById);

module.exports = restaurantRouter;
