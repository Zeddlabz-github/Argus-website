/**
 * @author krish
 */

const model = require('../model/docs');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

const getObjSize = (obj) => {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

const uploadData = (req, res) => {
  const userId = req.auth._id;
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: 'problem with image',
      });
    }
    model.findOne({ userId }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        res.status(400).json({
          error: 'Document is already available for this user',
        });
      } else {
        if (getObjSize(file)) {
          let savedDoc = 0;
          const newModel = new model();
          newModel.userId = userId;
          _.forIn(file, (value, key) => {
            if (value.size > 3000000) {
              logger.info(`File size is too big for ${doc}`);
            } else {
              savedDoc++;
              newModel[key].name = value.name;
              newModel[key].data = fs.readFileSync(value.path);
              newModel[key].contentType = value.type;
            }
          });
          newModel.save((err, data) => {
            if (err) {
              logger.error(err);
            }
            res.status(200).json({
              message: `${savedDoc} Document saved successfully!`,
            });
          });
        } else {
          res.status(404).json({
            message: 'File Not Found',
          });
        }
      }
    });
  });
};

const updateData = (req, res) => {
  const userId = req.auth._id;
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: 'problem with image',
      });
    }
    model.findOne({ userId }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        let fileName, fileData, fileType;
        if (getObjSize(file)) {
          let savedDoc = 0;
          _.forIn(file, (value, key) => {
            if (value.size > 3000000) {
              logger.info(`File size is too big for ${doc}`);
            } else {
              fileName = value.name;
              fileData = fs.readFileSync(value.path);
              fileType = value.type;
              savedDoc++;
              model
                .updateOne(
                  { userId },
                  {
                    $set: {
                      [key]: {
                        name: fileName,
                        data: fileData,
                        contentType: fileType,
                      },
                    },
                  }
                )
                .then(() => null);
            }
          });
          res.status(200).json({
            message: `${savedDoc} documents updated succesfully!`,
          });
        } else {
          res.status(404).json({
            message: 'File Not Found',
          });
        }
      } else {
        res.status(404).json({
          error: 'No Documents found for this user!',
        });
      }
    });
  });
};

const getData = (req, res) => {
  const userId = req.auth._id;
  model.findOne({ userId }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      _.forIn(data, (value, key) => {
        if(key.includes('doc')) {
          data[`${key}`].data = undefined;
        }
      })
      res.send(data);
    } else {
      res.json({
        message: 'No Record found!',
      });
    }
  });
};

const getPhoto = (req, res) => {
  const userId = req.auth._id;
  const doc = req.params.id;
  model.findOne({ userId }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      if (data[`${doc}`].data !== null) {
        res.set('Content-Type', data[`${doc}`].contentType);
        res.send(data[`${doc}`].data);
      } else {
        res.status(404).json({
          message: 'Photo Not Found!',
        });
      }
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

const deleteDocs = (req, res) => {
  const userId = req.auth._id;
  const docs = req.body.docs;

  if (docs?.length) {
    model.findOne({ userId }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        docs.forEach((key) => {
          model
            .updateOne(
              { userId },
              {
                $set: {
                  [key]: {
                    name: null,
                    data: null,
                    contentType: null,
                  },
                },
              }
            )
            .then(() => null);
        });
        res.status(200).json({
          message: `${docs.length} document deleted succesfully!`,
        });
      } else {
        res.json({
          message: 'No Record found!',
        });
      }
    });
  } else {
    res.json({
      error: 'Give atleast 1 doc in an array with docs as a key!',
    });
  }
};

module.exports = {
  uploadData,
  updateData,
  getData,
  getPhoto,
  deleteDataById,
  deleteDocs,
};
