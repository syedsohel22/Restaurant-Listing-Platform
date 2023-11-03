const { Restaurant } = require("../models");
const errorHandler = require("../utils/Error");

// create Restaurant
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

// Get All Restaurant
const getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();

    res.json(restaurants);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Get a Restaurant By Id
const getRestaurantById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return next(errorHandler(404, "Restaurant not found."));
    }

    res.json(restaurant);
  } catch (error) {
    next(error);
  }
};

// Update a Restaurant By Id
const updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address, contact } = req.body;

    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return next(errorHandler(404, "Restaurant not found."));
    }

    if (name) restaurant.name = name;
    if (address) restaurant.address = address;
    if (contact) restaurant.contact = contact;

    await restaurant.save();

    res.json(restaurant);
  } catch (error) {
    next(error);
  }
};

// Delete a Restaurant By Id
const deleteRestaurant = async (req, res, next) => {};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  deleteRestaurant,
  updateRestaurant,
};
