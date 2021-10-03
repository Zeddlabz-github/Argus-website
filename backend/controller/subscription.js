/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/**
 * @author krish
 */

const { validationResult } = require('express-validator');

const log4js = require('log4js');
const Model = require('../model/subscription');

const logger = log4js.getLogger();
logger.level = 'debug';

const saveData = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const { email } = req.body;

  if (!email) {
    res.json({
      error: 'Please Include E-Mail',
    });
  } else {
    const result = {
      email,
    };
    const subscriptionModel = new Model(result);
    Model.findOne({ email }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }

      if (!data) {
        subscriptionModel.save((error, dataNew) => {
          if (error) {
            res.status(400).json({
              error: 'Saving data in DB failed',
            });
          }
          res.json(dataNew);
        });
      } else {
        res.json({
          message: 'Email is Already stored in DB!',
        });
      }
    });
  }
};

const getDataById = (req, res) => {
  Model.findOne({ _id: req.params.id }).exec((err, data) => {
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
  Model.find({}).exec((err, data) => {
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

const updateDataById = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  Model.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (!data) {
      res.status(404).json({
        error: 'No record found!',
      });
    } else {
      let { email, isApproved } = req.body;
      if (data.email === email) {
        return res.json({
          error: 'Please enter different E-Mail address to update',
        });
      }
      !email ? (email = data.email) : email;
      isApproved === undefined ? (isApproved = data.isApproved) : isApproved;

      Model.updateOne(
        { _id: req.params.id },
        {
          $set: {
            email,
            isApproved,
          },
        },
      )
        .then(() => {
          res.json({
            message: 'User Updated Successfully!',
          });
        })
        .catch((error) => {
          logger.error(error);
          res.json({
            error: 'User Updation Failed!',
          });
        });
    }
  });
};

const deleteDataById = (req, res) => {
  Model.findByIdAndDelete({ _id: req.params.id }).exec((err, data) => {
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
  getDataById,
  getAllData,
  updateDataById,
  deleteDataById,
};
