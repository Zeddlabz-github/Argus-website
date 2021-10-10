/**
 * @author krish
 */

const calenderEventModel = require('../model/calenderEvent');
const mongoose = require('mongoose');

const log4js = require('log4js');
const logger = log4js.getLogger();
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

    const calenderEvent = new calenderEventModel(result);
    calenderEvent.save((err, data) => {
      if (err) {
        logger.error(err);
        res.status(400).json({
          error: 'Saving data in DB failed',
        });
      }
      res.status(200).json({
        message: 'Event Added Sucessfully!',
        data: data,
      });
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
    await calenderEventModel.findOne({ _id: id }).exec((err, data) => {
      if (err) {
        logger.error(err);
        res.status(400).json({
          error: 'Updating Calender Event in DB is failed!',
        });
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

        calenderEventModel
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
          error: 'No Events found!',
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
    await calenderEventModel
      .findOne({ _id: req.params.id })
      .exec((err, data) => {
        if (err) {
          res.status(400).json({
            error: 'Getting Calender Event from DB is failed!',
          });
          logger.error(err);
        }
        if (data) {
          res.status(200).send({
            message: 'Calender Event Fetched Sucessfully',
            data: data,
          });
        } else {
          res.status(404).json({
            error: 'No Event found!',
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
    const userId = mongoose.Types.ObjectId(id);
    const result = await calenderEventModel
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
    res.status(200).send({
      message: 'User Calender Event Fetched Sucessfully',
      data: result,
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Get Calender Event Function Executed');
  }
};

const getAllEvents = async (req, res) => {
  try {
    await calenderEventModel.find({}).exec((err, data) => {
      if (err) {
        res.status(400).json({
          error: 'Getting All Calender Events from DB is failed!',
        });
        logger.error(err);
      }
      if (data) {
        res.status(200).send({
          message: 'All Calender Events Fetched Sucessfully',
          data: data,
        });
      } else {
        res.status(404).json({
          error: 'No Events found!',
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
    await calenderEventModel
      .findByIdAndDelete({ _id: req.params.id })
      .exec((err, data) => {
        if (err) {
          res.status(400).json({
            error: 'Deleting Calender Event from DB is failed!',
          });
          logger.error(err);
        }
        if (data) {
          res.status(200).json({
            message: 'Calender Event deleted successfully!',
          });
        } else {
          res.status(404).json({
            error: 'No Events found!',
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
    await calenderEventModel
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
          message: 'User Deleted Successfully From this Event!',
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: 'Deleting User Event is failed!',
        });
        logger.error(err);
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
    await calenderEventModel
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
          message: 'User Deleted Successfully From all Events!',
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: 'Deleting All User Events is failed!',
        });
        logger.error(err);
      });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Delete User Calender Events Function Executed');
  }
};

const deleteAllEvents = async (req, res) => {
  try {
    await calenderEventModel.deleteMany({}).exec((err, data) => {
      if (err) {
        res.status(400).json({
          error: 'Deleting All Calender Events from DB is failed!',
        });
        logger.error(err);
      }
      if (data) {
        res.status(200).json({
          message: 'Document deleted successfully!',
        });
      } else {
        res.status(404).json({
          error: 'No Events found!',
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
