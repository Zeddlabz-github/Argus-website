/**
 * @author krish
 */

const model = require('../model/calenderEvent');
const userModel = require('../model/user');

let log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';

const addEvent = async (req, res) => {
  let result = {
    userId: '',
    userName: '',
    title: '',
    startTime: '',
    endTime: '',
  };
  const userId = req.auth._id;
  const { title, startTime, endTime } = req.body;

  try {
    await userModel.findOne({ _id: userId }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        result.userId = userId;
        result.userName = data.name;
        result.title = title;
        result.startTime = startTime;
        result.endTime = endTime;

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
      } else {
        res.status(404).json({
          message: 'No User found!',
        });
      }
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('Add Calender Event Function Executed');
  }
};

const updateEvent = async (req, res) => {
  const id = req.params.id;
  let { title, startTime, endTime } = req.body;

  try {
    await model.findOne({ _id: id }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        title === undefined ? (title = data.title) : null;
        startTime === undefined ? (startTime = data.startTime) : null;
        endTime === undefined ? (endTime = data.endTime) : null;

        model
          .updateOne(
            { _id: id },
            {
              $set: {
                title,
                startTime,
                endTime,
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

const getEvents = async (req, res) => {
  try {
    await model.find({ userId: req.params.userId }).exec((err, data) => {
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
    logger.info('Delete Calender Event Function Executed');
  }
};

const deleteUserEvents = async (req, res) => {
  try {
    await model.deleteMany({ userId: req.params.userId }).exec((err, data) => {
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
  getEvents,
  getAllEvents,
  deleteEventById,
  deleteUserEvents,
  deleteAllEvents,
};
