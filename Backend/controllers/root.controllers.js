const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !username || !name) {
      return res.status(400).json({ message: "All Fields are Required!" });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User with this Email Already Exists!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const profile = await profileModel.create({ userId: newUser._id });

    return res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All Fields are Required!" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password!" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      return res.status(400).json({ message: "Invalid Email or Password!" });
    }

    const token = jwt.sign(email, process.env.JWT_SECRET);

    await userModel.updateOne({ _id: user._id }, { token });

    res.status(200).json({ token, message: "Login Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.profile = async (req, res) => {
  const user = await userModel.findById(req.userModel.id).select("-password");
  res.json(userModel);
};
