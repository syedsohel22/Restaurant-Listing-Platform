const { Restaurant } = require("../models");
const errorHandler = require("../utils/Error");

const createRestaurant = async (req, res, next) => {
  const { name, address, contact } = req.body;

  try {
    if (!name) return next(errorHandler(400, "Please enter a name"));
    if (!address) return next(errorHandler(400, "Please enter a address"));
    if (!contact) return next(errorHandler(400, "Please enter a contact"));
    const restaurant = await Restaurant.create({
      name,
      address,
      contact,
    });

    res.status(201).json(restaurant);
  } catch (error) {
    next(error);
  }
};

const getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();

    res.json(restaurants);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found." });
    }

    res.json(restaurant);
  } catch (error) {
    next(error);
  }
};

module.exports = { createRestaurant, getAllRestaurants, getRestaurantById };
