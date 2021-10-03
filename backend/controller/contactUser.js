/* eslint-disable new-cap */
/**
 * @author krish
 */

const log4js = require('log4js');
const model = require('../model/contactUser');

const logger = log4js.getLogger();
logger.level = 'debug';

const saveData = (req, res) => {
  const { name, phoneNumber, message } = req.body;
  const result = { name, phoneNumber, message };
  const contactModel = new model(result);
  contactModel.save((err, data) => {
    if (err) {
      res.status(400).json({
        error: 'Saving data in DB failed',
      });
    }
    res.json(data);
  });
};

const getData = (req, res) => {
  model.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.send(data);
    } else {
      res.json({
        message: 'No Record found!',
      });
    }
  });
};
const getAllData = (req, res) => {
  model.find({}).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.send(data);
    } else {
      res.json({
        message: 'No Record found!',
      });
    }
  });
};

const deleteDataById = (req, res) => {
  model.findByIdAndDelete({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.json({
        message: 'Document deleted successfully!',
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
  getData,
  getAllData,
  deleteDataById,
};
