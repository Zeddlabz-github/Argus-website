/**
 * @author krish
 */

const model = require("../model/contact");
const formidable = require("formidable");
const fs = require("fs");
const { validationResult } = require("express-validator");

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

const updateData = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  var defaultData = {
    phoneNumber: "647.289.1070",
    address: `350 Rutherford Road South 
        Brampton ON L6W-4N6 
        Suite 210 Plaza 2`,
    email: "info@argussecurityservices.ca",
  };
  model.findOne({}).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      let id = data._id;
      let phNo = req.body.phoneNumber,
        email = req.body.email,
        address = req.body.email;
      if (req.body.phoneNumber === undefined) {
        phNo = defaultData.phoneNumber;
      }
      if (req.body.email === undefined) {
        email = defaultData.email;
      }
      if (req.body.address === undefined) {
        address = defaultData.address;
      }

      model
        .updateOne(
          { _id: id },
          {
            $set: {
              phoneNumber: phNo,
              email: email,
              address: address,
            },
          }
        )
        .then(() => {
          res.json({
            message: "Contact Updated Successfully!",
            data: {
              phoneNumber: phNo,
              email: email,
              address: address,
            },
          });
        })
        .catch(() => {
          res.json({
            error: "Contact Updation Failed!",
          });
        });
    } else {
      let contactModel = new model(defaultData);
      contactModel.save((err, data) => {
        if (err) {
          res.status(400).json({
            error: "Saving data in DB failed",
          });
        }
        res.json(data);
      });
    }
  });
};

const getData = (req, res) => {
  model.findOne({}).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.send(data);
    } else {
      res.json({
        message: "No Record found!",
      });
    }
  });
};

module.exports = {
  getData,
  updateData,
};
