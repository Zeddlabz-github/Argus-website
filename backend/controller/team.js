/**
 * @author krish
 */

const model = require("../model/team");
const formidable = require("formidable");
const fs = require("fs");

let log4js = require("log4js");
let logger = log4js.getLogger();
logger.level = "debug";

const saveData = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }
    let { name, role, description } = fields;

    if (!name) {
      return res.status(400).json({
        error: "Please include name!",
      });
    }
    if (!role) {
      return res.status(400).json({
        error: "Please include role!",
      });
    }
    if (!description) {
      return res.status(400).json({
        error: "Please include description!",
      });
    }

    let teamModel = new model(fields);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!",
        });
      }
      teamModel.photo.data = fs.readFileSync(file.photo.path);
      teamModel.photo.contentType = file.photo.type;
    }
    teamModel.save((err, data) => {
      if (err) {
        res.status(400).json({
          error: "Saving data in DB failed",
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
      data.photo = undefined;
      res.send(data);
    } else {
      res.json({
        message: "No Record found!",
      });
    }
  });
};

const getAllData = (req, res) => {
  model.find({}, { photo: 0 }).exec((err, data) => {
    if (err) {
      logger.error(err);
    }
    if (data) {
      data?.forEach((ele) => (ele.photo = undefined));
      res.send(data);
    } else {
      res.json({
        message: "No Record found!",
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
      res.set("Content-Type", data.photo.contentType);
      return res.send(data.photo.data);
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
    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: "problem with image",
        });
      }
      let { name, role, description } = fields;

      !name ? (name = data.name) : name;
      !role ? (role = data.role) : role;
      !description ? (description = data.description) : description;

      let teamData, type;
      if (file.photo) {
        if (file.photo.size > 3000000) {
          return res.status(400).json({
            error: "File size too big!",
          });
        }
        teamData = fs.readFileSync(file.photo.path);
        type = file.photo.type;
      } else {
        teamData = data.photo.data;
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
                data: teamData,
                contentType: type,
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
  getDataById,
  getAllData,
  getPhoto,
  updateDataById,
  deleteDataById,
};
