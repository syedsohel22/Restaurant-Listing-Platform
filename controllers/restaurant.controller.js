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
module.exports = { createRestaurant };
