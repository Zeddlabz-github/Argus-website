/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/**
 * @author krish
 */

const formidable = require('formidable');
const fs = require('fs');

const log4js = require('log4js');
const Model = require('../model/testimonial');

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

    if (!name || !role || !description) {
      return res.status(400).json({
        error: 'Please include all fields',
      });
    }

    const testimonialModel = new Model(fields);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: 'File size too big!',
        });
      }
      testimonialModel.photo.data = fs.readFileSync(file.photo.path);
      testimonialModel.photo.contentType = file.photo.type;
    }
    testimonialModel.save((error, data) => {
      if (error) {
        return res.status(400).json({
          error: 'Saving data in DB failed',
        });
      }
      data.photo = undefined;
      return res.json(data);
    });
    return 0;
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
      data?.forEach((ele) => {
        ele.photo = undefined;
        return 0;
      });
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
    return res.json({
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
    // eslint-disable-next-line consistent-return
    form.parse(req, (error, fields, file) => {
      if (error) {
        return res.status(400).json({
          error: 'problem with image',
        });
      }
      // eslint-disable-next-line object-curly-newline
      let { name, role, description, isApproved, priority } = fields;

      !name ? (name = data.name) : name;
      !role ? (role = data.role) : role;
      !description ? (description = data.description) : description;
      !isApproved ? (isApproved = data.isApproved) : isApproved;
      !priority ? (priority = data.priority) : priority;

      let empData;
      let type;
      if (file.photo) {
        if (file.photo.size > 3000000) {
          return res.status(400).json({
            error: 'File size too big!',
          });
        }
        empData = fs.readFileSync(file.photo.path);
        type = file.photo.type;
      } else {
        empData = data.photo.data;
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
              data: empData,
              contentType: type,
            },
            isApproved,
            priority,
          },
        },
      )
        .then(() => {
          res.json({
            message: 'User Updated Successfully!',
          });
        })
        .catch(() => res.json({ error: 'User Updation Failed!' }));
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
