const User = require("../models/user");

exports.getAll = (req, res, next) => {
  res.status(200).json(User.getAll());
};

exports.validateUser = (req, res) => {
  if (req.body.username.trim() == "" || req.body.password.trim() == "")
    throw new Error("Please provide valid credentials");
  res.status(200).json(User.validateUser(req.body.username, req.body.password));
};
