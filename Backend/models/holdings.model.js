const mongoose = require("mongoose");

const holdingModel = new mongoose.Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  avg: {
    type: Number,
  },
  price: {
    type: Number,
  },
  net: {
    type: String,
  },
  day: {
    type: String,
  },
});

module.exports = mongoose.model("holdingModel", holdingModel);
