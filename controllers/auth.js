const User = require("../models/user");
const { use } = require("../routes/auth");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user to DB",
      });
      res.json(user);
    }
  });
};

exports.signout = (req, res) => {
  res.json({
    message: "user signed out",
  });
};
