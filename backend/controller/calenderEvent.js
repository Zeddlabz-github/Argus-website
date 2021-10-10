/**
 * @author krish
 */

const model = require('../model/calenderEvent');
const mongoose = require('mongoose');

let log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';

const addEvent = async (req, res) => {
  let result = {
    title: '',
    startTime: '',
    endTime: '',
    users: [],
  };
  const { title, startTime, endTime, users } = req.body;

  try {
    result.title = title;
    result.startTime = startTime;
    result.endTime = endTime;
    result.users = users;

    const calenderEventModel = new model(result);
    calenderEventModel.save((err, data) => {
      if (err) {
        logger.error(err);
        res.status(400).json({
          error: 'Saving data in DB failed',
        });
      }
      res.status(200).json(data);
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Add Calender Event Function Executed');
  }
};

const updateEvent = async (req, res) => {
  const id = req.params.id;
  let { title, startTime, endTime, users, userEventType } = req.body;
  try {
    await model.findOne({ _id: id }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        title === undefined ? (title = data.title) : null;
        startTime === undefined ? (startTime = data.startTime) : null;
        endTime === undefined ? (endTime = data.endTime) : null;

        let userArr = data.users;

        users !== undefined && userEventType === undefined
          ? res.status(400).json({
              error:
                'For updating users specify userEventType as APPEND or OVERWRITE',
            })
          : null;

        userEventType === 'APPEND' && users !== undefined
          ? (userArr = [...userArr, ...users])
          : userEventType === 'OVERWRITE' && users !== undefined
          ? (userArr = users)
          : res.status(400).json({
              error: 'Given user in the users array not found on DB',
            });

        model
          .updateOne(
            { _id: id },
            {
              $set: {
                title,
                startTime,
                endTime,
                users: userArr,
              },
            }
          )
          .then(() => {
            res.status(200).json({
              message: 'Calender Event Updated Successfully!',
            });
          })
          .catch(() => {
            res.status(400).json({
              error: 'Calender Event Updation Failed!',
            });
          });
      } else {
        res.status(404).json({
          message: 'No Events found!',
        });
      }
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Update Calender Event Function Executed');
  }
};

const getEventById = async (req, res) => {
  try {
    await model.findOne({ _id: req.params.id }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).json({
          message: 'No Event found!',
        });
      }
    });
  } catch (err) {
    logger.info(err);
  } finally {
    logger.info('Get User By Id Function Executed');
  }
};

const getUserEvents = async (req, res) => {
  const id = req.params.userId;
  try {
    let userId = mongoose.Types.ObjectId(id);
    const result = await model
      .aggregate([
        {
          $match: {
            users: {
              $elemMatch: {
                userId: userId,
              },
            },
          },
        },
        {
          $project: {
            _id: '$_id',
            title: '$title',
            startTime: '$startTime',
            endTime: '$endTime',
          },
        },
      ])
      .sort({ _id: -1 });
    res.status(200).send(result);
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Get Calender Event Function Executed');
  }
};

const getAllEvents = async (req, res) => {
  try {
    await model.find({}).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).json({
          message: 'No Events found!',
        });
      }
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Get All Calender Event Function Executed');
  }
};

const deleteEventById = async (req, res) => {
  try {
    await model.findByIdAndDelete({ _id: req.params.id }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        res.status(200).json({
          message: 'Calender Event deleted successfully!',
        });
      } else {
        res.status(404).json({
          message: 'No Events found!',
        });
      }
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Delete Calender Event Function Executed');
  }
};

const deleteUserEvents = async (req, res) => {
  const id = req.params.id;
  const userId = req.body.userId;

  try {
    await model
      .updateOne(
        { _id: id },
        {
          $pull: {
            users: {
              userId: {
                $in: userId,
              },
            },
          },
        }
      )
      .then((data) => {
        logger.info(data);
        res.status(200).json({
          message: 'user deleted successfully!',
        });
      });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Delete User Calender Events Function Executed');
  }
};

const deleteAllUserEvents = async (req, res) => {
  const userId = req.params.userId;

  try {
    await model
      .updateMany(
        {
          users: {
            $elemMatch: {
              userId: userId,
            },
          },
        },
        {
          $pull: {
            users: {
              userId: {
                $in: userId,
              },
            },
          },
        }
      )
      .then(() => {
        res.status(200).json({
          message: 'user deleted successfully!',
        });
      });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Delete User Calender Events Function Executed');
  }
};

const deleteAllEvents = async (req, res) => {
  try {
    await model.deleteMany({}).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        res.status(200).json({
          message: 'Document deleted successfully!',
        });
      } else {
        res.status(404).json({
          message: 'No Events found!',
        });
      }
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Delete All Calender Events Function Executed');
  }
};

module.exports = {
  addEvent,
  updateEvent,
  getEventById,
  getUserEvents,
  getAllEvents,
  deleteEventById,
  deleteUserEvents,
  deleteAllUserEvents,
  deleteAllEvents,
};
