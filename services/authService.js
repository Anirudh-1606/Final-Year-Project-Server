const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

exports.signup = async (name, email, password) => {
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await userModel.create({ name, email, password: hashedPassword });
};

exports.login = async (email, password) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
  return token;
};
