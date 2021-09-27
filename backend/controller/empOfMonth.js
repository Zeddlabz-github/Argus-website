/**
 * @author krish
 */

const model = require("../model/empOfMonth");
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

const saveData = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  model.findOne({ month: month, year: year }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.json({
        error:
          "Employee of this month is already available on the database, Kindly delete it to create a new one",
      });
    } else {
      form.parse(req, (err, fields, file) => {
        if (err) {
          return res.status(400).json({
            error: "problem with image",
          });
        }
        let {
          empName,
          empDesc,
          skills,
          description,
          instructorName,
          instructorRole,
          title,
        } = fields;

        skills = skills.split(",");

        let empModel = new model(fields);
        empModel.month = month;
        empModel.year = year;

        _.forIn(file, (value, key) => {
          if (value.size > 3000000) {
            return res.status(400).json({
              error: "File size too big!",
            });
          }
          empModel[`${key}`].name = value.name;
          empModel[`${key}`].data = fs.readFileSync(value.path);
          empModel[`${key}`].contentType = value.type;
        });

        empModel.save((err, data) => {
          if (err) {
            res.status(400).json({
              error: "Saving data in DB failed",
            });
          }
          data.empImage = undefined;
          data.instructorSign = undefined;
          data.instructorImage = undefined;
          res.json(data);
        });
      });
    }
  });
};

const getData = (req, res) => {
  model.findOne({ month }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      data.empImage = undefined;
      data.instructorImage = undefined;
      data.instructorSign = undefined;
      res.send(data);
    } else {
      res.json({
        message: "No Record found!",
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
      data.empImage = undefined;
      data.instructorImage = undefined;
      data.instructorSign = undefined;
      res.send(data);
    } else {
      res.json({
        message: "No Record found!",
      });
    }
  });
};

const getPhoto = (req, res) => {
  const url = req.params.id.split("-");
  const image = url[0];
  const id = url[1];
  model.findOne({ _id: id }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.set("Content-Type", data[`${image}`].contentType);
      return res.send(data[`${image}`].data);
    } else {
      res.json({
        message: "No Record found!",
      });
    }
  });
};

const getDataByMonth = (req, res) => {
  model.findOne({ month: req.params.month }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      data.empImage = undefined;
      data.instructorImage = undefined;
      data.instructorSign = undefined;
      res.send(data);
    } else {
      res.json({
        message: "No Record found!",
      });
    }
  });
};

const getAllData = (req, res) => {
  model
    .find({}, { empImage: 0, instructorImage: 0, instructorSign: 0 })
    .exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if (data) {
        data?.forEach((data) => {
          data.empImage = undefined;
          data.instructorImage = undefined;
          data.instructorSign = undefined;
        });
        res.send(data);
      } else {
        res.json({
          message: "No Record found!",
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
    if (!data) {
      res.status(404).json({
        message: "No Record to update!",
      });
    } else {
      form.parse(req, (err, fields, file) => {
        if (err) {
          return res.status(400).json({
            error: "problem with image",
          });
        }
        let {
          empName,
          empDesc,
          skills,
          description,
          instructorName,
          instructorRole,
          month,
          year,
          title,
        } = fields;

        !empName ? (empName = data?.empName) : empName;
        !empDesc ? (empDesc = data?.empDesc) : empDesc;
        !skills ? (skills = data?.skills) : skills.split(",");
        !description ? (description = data?.description) : description;
        !instructorName
          ? (instructorName = data?.instructorName)
          : instructorName;
        !instructorRole
          ? (instructorRole = data?.instructorRole)
          : instructorRole;
        !month ? (month = data?.month) : month;
        !year ? (year = data?.year) : year;
        !title ? (title = data?.title) : title;

        let empData,
          empType,
          instructorData,
          instructorType,
          instructorSignData,
          instructorSignType;
        if (file.empImage) {
          if (file.empImage.size > 3000000) {
            return res.status(400).json({
              error: "File size too big!",
            });
          }
          empData = fs.readFileSync(file.empImage.path);
          empType = file.empImage.type;
        } else {
          empData = data.empImage.data;
          empType = data.empImage.contentType;
        }

        if (file.instructorImage) {
          if (file.instructorImage.size > 3000000) {
            return res.status(400).json({
              error: "File size too big!",
            });
          }
          instructorData = fs.readFileSync(file.instructorImage.path);
          instructorType = file.instructorImage.type;
        } else {
          instructorData = data.instructorImage.data;
          instructorType = data.instructorImage.contentType;
        }

        if (file.instructorSign) {
          if (file.instructorSign.size > 3000000) {
            return res.status(400).json({
              error: "File size too big!",
            });
          }
          instructorSignData = fs.readFileSync(file.instructorSign.path);
          instructorSignType = file.instructorSign.type;
        } else {
          instructorSignData = data.instructorSign.data;
          instructorSignType = data.instructorSign.contentType;
        }

        model
          .updateOne(
            { _id: req.params.id },
            {
              $set: {
                empName: empName,
                empDesc: empDesc,
                skills: skills,
                title: title,
                description: description,
                instructorName: instructorName,
                instructorRole: instructorRole,
                month: month,
                year: year,
                empImage: {
                  data: empData,
                  contentType: empType,
                },
                instructorImage: {
                  data: instructorData,
                  contentType: instructorType,
                },
                instructorSign: {
                  data: instructorSignData,
                  contentType: instructorSignType,
                },
              },
            }
          )
          .then(() => {
            res.json({
              message: "User Updated Successfully!",
            });
          })
          .catch(() => {
            res.json({
              error: "User Updation Failed!",
            });
          });
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
        message: "Document deleted successfully!",
      });
    } else {
      res.json({
        message: "No Record found!",
      });
    }
  });
};

module.exports = {
  saveData,
  getData,
  getDataById,
  getDataByMonth,
  getPhoto,
  getAllData,
  updateDataById,
  deleteDataById,
};
