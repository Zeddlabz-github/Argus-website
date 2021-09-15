/**
 * @author krish
 */

 const model = require('../model/client');
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
     let { name } = fields;
 
     if (!name) {
       return res.status(400).json({
         error: 'Please include name!',
       });
     }
 
     let clientModel = new model(fields);
 
     if (file.logo) {
       if (file.logo.size > 3000000) {
         return res.status(400).json({
           error: 'File size too big!',
         });
       }
       clientModel.logo.data = fs.readFileSync(file.logo.path);
       clientModel.logo.contentType = file.logo.type;
     }
     clientModel.save((err, data) => {
       if (err) {
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
   model.find({}).exec((err, data) => {
     if (err) {
       logger.error(err);
     }
     if (data) {
       data?.forEach((ele) => ele.logo = undefined)
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
       res.set('Content-Type', data.logo.contentType);
       return res.send(data.logo.data);
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
       let { name} = fields;
 
       !name ? (name = data.name) : name;

 
       let clientData, type;
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
               name: name,
               logo: {
                 data: clientData,
                 contentType: type,
               },
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
 