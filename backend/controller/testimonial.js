/**
 * @author krish
 */

const model = require('../model/testimonial');
const formidable = require('formidable');
const fs = require('fs');

let log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';

const saveData = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: 'problem with image',
      });
    }
    let { name, role, description } = fields;

    if (!name || !role || !description) {
      return res.status(400).json({
        error: 'Please include all fields',
      });
    }

    let testimonialModel = new model(fields);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: 'File size too big!',
        });
      }
      testimonialModel.photo.data = fs.readFileSync(file.photo.path);
      testimonialModel.photo.contentType = file.photo.type;
    }
    testimonialModel.save((err, data) => {
      if (err) {
        res.status(400).json({
          error: 'Saving data in DB failed',
        });
      }
      data.photo = undefined;
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
      data?.forEach((ele) => ele.photo = undefined)
      res.send(data);
    } else {
      res.json({
        message: 'No Record found!',
      });
    }
  });
};

const getPhoto = (req, res) => {
  const id = req.params.id;
  model.findOne({ _id: id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.set('Content-Type', data.photo.contentType);
      return res.send(data.photo.data);
    } else {
      res.json({
        message: 'No Record found!',
      });
    }
  });
};

const updateDataById = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  model.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: 'problem with image',
        });
      }
      let { name, role, description, isApproved, priority } = fields;

      !name ? (name = data.name) : name;
      !role ? (role = data.role) : role;
      !description ? (description = data.description) : description;
      !isApproved ? (isApproved = data.isApproved) : isApproved;
      !priority ? (priority = data.priority) : priority;

      let empData, type;
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

      model
        .updateOne(
          { _id: req.params.id },
          {
            $set: {
              name: name,
              role: role,
              description: description,
              photo: {
                data: empData,
                contentType: type,
              },
              isApproved: isApproved,
              priority: priority,
            },
          }
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
