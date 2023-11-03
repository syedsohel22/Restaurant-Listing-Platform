const { Restaurant } = require("../models");

const createRestaurant = async (req, res) => {
  const { name, address, contact } = req.body;
  if (!name || !address || !contact) {
    res.status(404).json({ message: "please enter every value." });
  }
  try {
    const restaurant = await Restaurant.create({
      name,
      address,
      contact,
    });

    res.status(201).json(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "could not create a new restaurant" });
  }
};
module.exports = { createRestaurant };
