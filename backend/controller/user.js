const User = require('../model/user');

const getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'No user was found in DB',
      });
    }
    req.profile = user;
    next();
  });
};

const getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.__v = undefined;
  return res.json(req.profile);
};

//This code is used to get all the users information TODO: Later delete this code
const getAllUsers = (req, res) => {
  User.find().exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'No users were found in a DB!',
      });
    }
    res.json(user);
  });
};

module.exports = {
  getUserById,
  getUser,
  getAllUsers,
};
