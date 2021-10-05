/**
 * @author krish
 */

const userActivityModel = require('../model/userActivity');
const userModel = require('../model/user');
const mongoose = require('mongoose');

let log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';

const saveData = (req, res) => {
  let result = {
    userId: '',
    userName: '',
    activityDetails: '',
  };
  const userId = req.auth._id;
  const activityDetails = req.body.activityDetails;

  userModel.findOne({ _id: userId }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      result.userId = userId;
      result.userName = data.name;
      result.activityDetails = activityDetails;

      const activityModel = new userActivityModel(result);
      activityModel.save((err, data) => {
        if (err) {
          logger.error(err);
          res.status(400).json({
            error: 'Saving data in DB failed',
          });
        }
        res.json(data);
      });
    } else {
      res.json({
        message: 'No User found!',
      });
    }
  });
};

//label for pagination
const label = {
  totalDocs: 'totalActivities',
  docs: 'activities',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
};

const getUserData = (req, res) => {
  let options = {
    page: 2,
    limit: 10,
    customLabels: label,
  };

  req.query.page !== undefined ? (options.page = req.query.page) : null;
  req.query.limit !== undefined ? (options.limit = req.query.limit) : null;

  let userId = req.auth._id;
  userActivityModel.paginate({ userId }, options, (err, result) => {
    if (err) {
      logger.error(err);
    }
    res.send(result);
  });
};

const getOtherUserData = (req, res) => {
  let options = {
    page: 2,
    limit: 10,
    customLabels: label,
  };
  let userId;
  if (req.query.userId === undefined) {
    res.status(200).json({
      error: 'Please pass userId as a query parameter',
    });
  } else {
    userId = req.query.userId;
  }
  req.query.page !== undefined ? (options.page = req.query.page) : null;
  req.query.limit !== undefined ? (options.limit = req.query.limit) : null;

  userActivityModel.paginate({ userId }, options, (err, result) => {
    if (err) {
      logger.error(err);
    }
    res.send(result);
  });
};

const getAllUserData = async (req, res) => {
  let result;
  if (req.query.userId === undefined) {
    result = await userActivityModel
      .aggregate([
        {
          $group: {
            _id: {
              userId: '$userId',
              userName: '$userName',
            },
            activities: {
              $push: {
                activityId: '$_id',
                activityDetails: '$activityDetails',
                createdAt: {
                  $dateToString: {
                    date: '$createdAt',
                    timezone: 'Asia/Kolkata',
                  },
                },
                updatedAt: {
                  $dateToString: {
                    date: '$updatedAt',
                    timezone: 'Asia/Kolkata',
                  },
                },
              },
            },
          },
        },
      ])
      .sort({ _id: -1 });
  } else {
    let userId = mongoose.Types.ObjectId(req.query.userId);
    result = await userActivityModel
      .aggregate([
        {
          $match: {
            userId: userId,
          },
        },
        {
          $group: {
            _id: {
              userId: '$userId',
              userName: '$userName',
            },
            activities: {
              $push: {
                activityDetails: '$activityDetails',
                createdAt: {
                  $dateToString: {
                    date: '$createdAt',
                    timezone: 'Asia/Kolkata',
                  },
                },
                updatedAt: {
                  $dateToString: {
                    date: '$updatedAt',
                    timezone: 'Asia/Kolkata',
                  },
                },
              },
            },
          },
        },
      ])
      .sort({ _id: -1 });
  }

  if (result.length) {
    res.status(200).send(result);
  } else {
    res.status(400).json({
      error: 'No Activites found!',
    });
  }
};

const deleteDataById = (req, res) => {
  userActivityModel
    .findByIdAndDelete({ _id: req.params.id })
    .exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        res.json({
          message: 'Activity deleted successfully!',
        });
      } else {
        res.json({
          message: 'No Record found!',
        });
      }
    });
};

const deleteAllDataByUserId = (req, res) => {
  userActivityModel
    .deleteMany({ userId: req.params.userId })
    .exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        res.json({
          message: 'User activites deleted successfully!',
        });
      } else {
        res.json({
          message: 'No Record found!',
        });
      }
    });
};

module.exports = {
  saveData,
  getUserData,
  getOtherUserData,
  getAllUserData,
  deleteDataById,
  deleteAllDataByUserId,
};
