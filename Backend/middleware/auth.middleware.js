const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const verify = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access Denied! No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ email: decoded });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid Token! Unauthorized access." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token!" });
  }
};

module.exports = verify;
