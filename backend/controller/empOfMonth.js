/**
 * @author krish
 */

const model = require("../model/empOfMonth");
const formidable = require("formidable");
const fs = require("fs");

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

const saveData = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  model.findOne({}).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      res.json({
        error:
          "Employee of the month is already available on the database, Kindly delete it to create a new one",
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
        } = fields;

        if (
          !empName ||
          !empDesc ||
          !skills ||
          !description ||
          !description ||
          !instructorName ||
          !instructorRole
        ) {
          return res.status(400).json({
            error: "Please include all fields",
          });
        }
        skills = skills.split(",");
        let empModel = new model(fields);

        if (file.empImage) {
          if (file.empImage.size > 3000000) {
            return res.status(400).json({
              error: "File size too big!",
            });
          }
          empModel.empImage.data = fs.readFileSync(file.empImage.path);
          empModel.empImage.contentType = file.empImage.type;
        }

        if (file.instructorImage) {
          if (file.instructorImage.size > 3000000) {
            return res.status(400).json({
              error: "File size too big!",
            });
          }
          empModel.instructorImage.data = fs.readFileSync(
            file.instructorImage.path
          );
          empModel.instructorImage.contentType = file.instructorImage.type;
        }
        empModel.save((err, data) => {
          if (err) {
            res.status(400).json({
              error: "Saving data in DB failed",
            });
          }
          res.json(data);
        });
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

const deleteData = (req, res) => {
  model
    .deleteOne({})
    .then(() =>
      res.json({
        message: "Record Deleted Successfully!",
      })
    )
    .catch((err) => logger.error(err));
};

module.exports = {
  saveData,
  getData,
  deleteData,
};
