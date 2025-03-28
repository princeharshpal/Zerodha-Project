const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },

  price: {
    type: Number,
  },
  mode: {
    type: String,
  },
});

module.exports = mongoose.model("orderModel", orderSchema);
