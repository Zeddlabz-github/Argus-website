/**
 * @author krish
 */

const model = require("../model/docs");
const formidable = require("formidable");
const fs = require("fs");

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

const uploadData = (req, res) => {
  const userId = req.auth._id;
  
  model.findOne({userId : userId}).exec((err, data) => {
      if(err) {
          logger.error(err);
      }
      if(data) {
          res.json({
              "error" : "Docs for this user is already present"
          })
      } else {
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.parse(req, (err, fields, file) => {
          if (err) {
            return res.status(400).json({
              error: "problem with image",
            });
          }
          let docsModel = new model();
          docsModel.userId = userId;
          console.log(file.doc1);

          if (file.doc1 && file.doc2 && file.doc3) {
            if (file.doc1.size > 3000000 || file.doc2.size > 3000000 || file.doc3.size > 3000000) {
              return res.status(400).json({
                error: "File size too big!",
              });
            }
            docsModel.doc1.data = fs.readFileSync(file.doc1.path);
            docsModel.doc1.contentType = file.doc1.type;
      
            docsModel.doc2.data = fs.readFileSync(file.doc2.path);
            docsModel.doc2.contentType = file.doc2.type;
      
            docsModel.doc3.data = fs.readFileSync(file.doc3.path);
            docsModel.doc3.contentType = file.doc3.type;
          } else {
              res.json({
                  error: "Please Upload all three docs",
                });
          }
          docsModel.save((err, data) => {
            if (err) {
              res.status(400).json({
                error: "Saving data in DB failed",
              });
            }
            res.json(data);
          });
        });
      }
  })
};

const updateData = (req, res) => {
    const userId = req.auth._id; 
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    model.findOne({ userId }).exec((err, data) => {
      if (err) {
        logger.error(err);
      }
      if(data) {
          form.parse(req, (err, fields, file) => {
              if (err) {
                return res.status(400).json({
                  error: "problem with image",
                });
              }
              let data1, type1, data2, type2, data3, type3
              if (file.doc1) {
                if (file.doc1.size > 3000000) {
                  return res.status(400).json({
                    error: "File size too big!",
                  });
                }
                data1 = fs.readFileSync(file.doc1.path);
                type1 = file.doc1.type;
              } else {
                data1 = data.doc1.data;
                type1 = data.doc1.contentType;
              }
        
              if (file.doc2) {
                if (file.doc2.size > 3000000) {
                  return res.status(400).json({
                    error: "File size too big!",
                  });
                }
                data2 = fs.readFileSync(file.doc2.path);
                type2 = file.doc2.type;
              } else {
                data2 = data.doc2.data;
                type2 = data.doc2.contentType;
              }
        
              if (file.doc3) {
                if (file.doc3.size > 3000000) {
                  return res.status(400).json({
                    error: "File size too big!",
                  });
                }
                data3 = fs.readFileSync(file.doc3.path);
                type3 = file.doc3.type;
              } else {
                data3 = data.doc3.data;
                type3 = data.doc3.contentType;
              }
        
              model
                .updateOne(
                  { userId },
                  {
                    $set: {
                      doc1: {
                        data: data1,
                        contentType: type1,
                      },
                      doc2: {
                        data: data2,
                        contentType: type2,
                      },
                      doc3: {
                        data: data3,
                        contentType: type3,
                      },
                    },
                  }
                )
                .then(() => {
                  res.json({
                    message: "Document Updated Successfully!",
                  });
                })
                .catch(() => {
                  res.json({
                    error: "Document Updation Failed!",
                  });
                });
            });
        } else {
            res.json({
                "error" : "No Documents found for this user!"
            })
        }
    });
  };

const getData = (req, res) => {
    const userId = req.auth._id; 
    logger.info(userId)
    model.findOne({ userId }).exec((err, data) => {
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
}

const getDataById = (req, res) => {
  model.findOne({ _id: req.params.id }).exec((err, data) => {
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

const getAllData = (req, res) => {
  model.find({}).exec((err, data) => {
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
  uploadData,
  updateData,
  getData,
  getDataById,
  getAllData,
  deleteDataById,
};
