/**
 * @author krish
 */

const model = require('../model/docs');
const formidable = require('formidable');
const fs = require('fs');

const Doc1 = require('../model/doc1');
const Doc2 = require('../model/doc2');
const Doc3 = require('../model/doc3');

var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

//to find an object size
Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

//handles files and stores in db
const handleUpload = (file, doc, Model, model, userId, res) => {
  Model.findOne({ userId }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      logger.info(`${doc} is already available for this user`);
      res.status(400).json({
        error: `${doc} is already available for this user`,
      });
    } else {
      if (file[`${doc}`].size > 3000000) {
        logger.info(`File size is too big for ${doc}`);
        res.status(400).json({
          error: `File size is too big for ${doc}`,
        });
      } else {
        model.userId = userId;
        model.doc.name = file[`${doc}`].name;
        model.doc.data = fs.readFileSync(file[`${doc}`].path, 'base64');
        model.doc.contentType = file[`${doc}`].type;

        model.save((err, data) => {
          if (err) {
            logger.error(err);
          }
          logger.info(`${doc} saved successfully!`);
          res.status(200).json({
            message: `${doc} saved successfully!`,
          });
        });
      }
    }
  });
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
    if (Object.size(file) === 1) {
      if (file.doc1) {
        const docsModel = new Doc1();
        handleUpload(
          (file = file),
          (doc = 'doc1'),
          (Model = Doc1),
          docsModel,
          userId,
          res
        );
      }
      if (file.doc2) {
        const docsModel = new Doc2();
        handleUpload(
          (file = file),
          (doc = 'doc2'),
          (Model = Doc2),
          docsModel,
          userId,
          res
        );
      }
      if (file.doc3) {
        const docsModel = new Doc3();
        handleUpload(
          (file = file),
          (doc = 'doc3'),
          (Model = Doc3),
          docsModel,
          userId,
          res
        );
      }
    } else {
      res.status(400).json({
        error: 'Upload only one file at a time',
      });
    }
  });
};

const handleUpdate = (Model, file, doc, userId, res) => {
  Model.findOne({ userId }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      let name, fileData, contentType;
      console.log(file);
      if (file[`${doc}`] && file[`${doc}`].type) {
        if (file[`${doc}`].size > 3000000) {
          logger.info(`File size is too big for ${doc}`);
          return res.status(400).json({
            error: `File size is too big for ${doc}`,
          });
        }
        name = file[`${doc}`].name;
        fileData = fs.readFileSync(file[`${doc}`].path, 'base64');
        contentType = file[`${doc}`].type;
      } else {
        name = data.doc.name;
        fileData = data.doc.data;
        contentType = data.doc.contentType;
      }
      Model.updateOne(
        { userId },
        {
          $set: {
            doc: {
              name,
              data: fileData,
              contentType,
            },
          },
        }
      )
        .then(() => {
          res.json({
            message: `${doc} Updated Successfully!`,
          });
        })
        .catch(() => {
          res.json({
            error: `${doc} Updated Failed!`,
          });
        });
    } else {
      res.status(404).json({
        error: 'No Documents found for this user!',
      });
    }
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
    if (Object.size(file) === 1) {
      if (file.doc1) {
        handleUpdate(
          (Model = Doc1),
          (file = file),
          (doc = 'doc1'),
          userId,
          res
        );
      }
      if (file.doc2) {
        handleUpdate(
          (Model = Doc2),
          (file = file),
          (doc = 'doc2'),
          userId,
          res
        );
      }
      if (file.doc3) {
        handleUpdate(
          (Model = Doc3),
          (file = file),
          (doc = 'doc3'),
          userId,
          res
        );
      }
    } else {
      res.status(400).json({
        error: 'Upload only one file at a time',
      });
    }
  });
};

const getData = (req, res) => {
  const userId = req.auth._id;
  logger.info(userId);
  model.findOne({ userId }).exec((err, data) => {
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
  uploadData,
  updateData,
  getData,
  getDataById,
  getAllData,
  deleteDataById,
};
