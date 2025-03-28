const holdingModel = require("../models/holdings.model");
const positionModel = require("../models/positions.model");
const orderModel = require("../models/orders.Model");

module.exports.getAllHoldings = async (req, res) => {
  try {
    const allHoldings = await holdingModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllPositions = async (req, res) => {
  try {
    const allpositions = await positionModel.find({});
    res.status(200).json(allpositions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.newOrder = async (req, res) => {
  try {
    await orderModel.create({ ...req.body });
    res.status(200).json({ message: "Order added successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.fetchOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
