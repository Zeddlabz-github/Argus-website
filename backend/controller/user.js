const userModel = require('../model/user');

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

const getUserById = async (req, res, next, id) => {
  try {
    await userModel.findById(id).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'No user was found in DB',
        });
      }
      req.profile = user;
      next();
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Get User By Id Function is Executed');
  }
};

const getUser = (req, res) => {
  try {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.__v = undefined;
    return res.json(req.profile);
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Get User Function is Executed');
  }
};

const getAllUsers = async (req, res) => {
  try {
    await userModel.find({}).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'No users were found in a DB!',
        });
      }
      res.json(user);
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Get All User Function is Executed');
  }
};

module.exports = {
  getUserById,
  getUser,
  getAllUsers,
};
