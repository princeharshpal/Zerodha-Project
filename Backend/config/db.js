const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;