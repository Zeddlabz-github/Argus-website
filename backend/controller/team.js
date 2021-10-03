/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/**
 * @author krish
 */

const formidable = require('formidable');
const fs = require('fs');

const log4js = require('log4js');
const Model = require('../model/team');

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
    const { name, role, description } = fields;

    if (!name) {
      return res.status(400).json({
        error: 'Please include name!',
      });
    }
    if (!role) {
      return res.status(400).json({
        error: 'Please include role!',
      });
    }
    if (!description) {
      return res.status(400).json({
        error: 'Please include description!',
      });
    }

    const teamModel = new Model(fields);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: 'File size too big!',
        });
      }
      teamModel.photo.data = fs.readFileSync(file.photo.path);
      teamModel.photo.contentType = file.photo.type;
    }
    teamModel.save((error, data) => {
      if (error) {
        res.status(400).json({
          error: 'Saving data in DB failed',
        });
      }
      data.photo = undefined;
      return res.json(data);
    });
  });
};

const getDataById = (req, res) => {
  Model.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      data.photo = undefined;
      res.send(data);
    } else {
      res.json({
        message: 'No Record found!',
      });
    }
  });
};

const getAllData = (req, res) => {
  Model.find({}, { photo: 0 }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      data?.forEach((ele) => (ele.photo = undefined));
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
  Model.findOne({ _id: id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.set('Content-Type', data.photo.contentType);
      return res.send(data.photo.data);
    }
    res.json({
      message: 'No Record found!',
    });
  });
};

const updateDataById = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  Model.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    form.parse(req, (error, fields, file) => {
      if (error) {
        return res.status(400).json({
          error: 'problem with image',
        });
      }
      let { name, role, description } = fields;

      !name ? (name = data.name) : name;
      !role ? (role = data.role) : role;
      !description ? (description = data.description) : description;

      let teamData;
      let type;
      if (file.photo) {
        if (file.photo.size > 3000000) {
          return res.status(400).json({
            error: 'File size too big!',
          });
        }
        teamData = fs.readFileSync(file.photo.path);
        type = file.photo.type;
      } else {
        teamData = data.photo.data;
        type = data.photo.contentType;
      }

      Model.updateOne(
        { _id: req.params.id },
        {
          $set: {
            name,
            role,
            description,
            photo: {
              data: teamData,
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
  getPhoto,
  updateDataById,
  deleteDataById,
};
