/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/**
 * @author krish
 */

const formidable = require('formidable');
const fs = require('fs');

const log4js = require('log4js');
const model = require('../model/client');

const logger = log4js.getLogger();
logger.level = 'debug';

const saveData = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: 'problem with image',
      });
    }
    const { name, url } = fields;

    if (!name) {
      return res.status(400).json({
        error: 'Please include name!',
      });
    }

    const clientModel = new model(fields);

    if (file.logo) {
      if (file.logo.size > 3000000) {
        return res.status(400).json({
          error: 'File size too big!',
        });
      }
      clientModel.logo.data = fs.readFileSync(file.logo.path);
      clientModel.logo.contentType = file.logo.type;
    }
    clientModel.save((error, data) => {
      if (error) {
        res.status(400).json({
          error: 'Saving data in DB failed',
        });
      }
      data.logo = undefined;
      res.json(data);
    });
  });
};

const getDataById = (req, res) => {
  model.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      data.logo = undefined;
      res.send(data);
    } else {
      res.json({
        message: 'No Record found!',
      });
    }
  });
};

const getAllData = (req, res) => {
  model.find({}, { logo: 0 }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      data?.forEach((ele) => (ele.logo = undefined));
      res.send(data);
    } else {
      res.json({
        message: 'No Record found!',
      });
    }
  });
};

const getPhoto = (req, res) => {
  const { id } = req.params;
  model.findOne({ _id: id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.set('Content-Type', data.logo.contentType);
      return res.send(data.logo.data);
    }
    res.json({
      message: 'No Record found!',
    });
  });
};

const updateDataById = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  model.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    form.parse(req, (error, fields, file) => {
      if (error) {
        return res.status(400).json({
          error: 'problem with image',
        });
      }
      let { name, url } = fields;

      !name ? (name = data.name) : name;
      !url ? (url = data.url) : url;

      let clientData;
      let type;
      if (file.logo) {
        if (file.logo.size > 3000000) {
          return res.status(400).json({
            error: 'File size too big!',
          });
        }
        clientData = fs.readFileSync(file.logo.path);
        type = file.logo.type;
      } else {
        clientData = data.logo.data;
        type = data.logo.contentType;
      }

      model
        .updateOne(
          { _id: req.params.id },
          {
            $set: {
              name,
              url,
              logo: {
                data: clientData,
                contentType: type,
              },
            },
          },
        )
        .then(() => {
          res.json({
            message: 'User Updated Successfully!',
          });
        })
        .catch(() => {
          res.json({
            error: 'User Updation Failed!',
          });
        });
    });
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
  getDataById,
  getAllData,
  getPhoto,
  updateDataById,
  deleteDataById,
};
