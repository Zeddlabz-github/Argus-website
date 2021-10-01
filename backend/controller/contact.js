/**
 * @author krish
 */

const model = require("../model/contact");
const { validationResult } = require("express-validator");

let log4js = require("log4js");
let logger = log4js.getLogger();
logger.level = "debug";

const updateData = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  let defaultData = {
    phoneNumber: "647.289.1070",
    address: `350 Rutherford Road South 
        Brampton ON L6W-4N6 
        Suite 210 Plaza 2`,
    email: "info@argussecurityservices.ca",
    mapLocation: `<iframe
    title="Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.38568994079!2d-79.71944568499285!3d43.681744458603305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f742bd5dfaf%3A0x4e85dd4aa00d79f1!2sArgus%20Security%20Services%20Corp.!5e0!3m2!1sen!2sin!4v1628009453160!5m2!1sen!2sin"
    className="w-full h-96 bg-gray-200"
    allowfullscreen=""
    loading="lazy"
  ></iframe>`,
  };
  model.findOne({}).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      let id = data._id;
      let phoneNumber = req.body.phoneNumber,
        email = req.body.email,
        address = req.body.address;
      mapLocation = req.body.mapLocation;
      if (req.body.phoneNumber === undefined) {
        phoneNumber = defaultData.phoneNumber;
      }
      if (req.body.email === undefined) {
        email = defaultData.email;
      }
      if (req.body.address === undefined) {
        address = defaultData.address;
      }
      if (req.body.mapLocation === undefined) {
        mapLocation = defaultData.mapLocation;
      }

      model
        .updateOne(
          { _id: id },
          {
            $set: {
              phoneNumber,
              email,
              address,
              mapLocation,
            },
          }
        )
        .then(() => {
          res.json({
            message: "Contact Updated Successfully!",
            data: {
              phoneNumber: phoneNumber,
              email: email,
              address: address,
              mapLocation: mapLocation,
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
