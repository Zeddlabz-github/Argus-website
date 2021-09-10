/**
 * @author krish
 */

 const mongoose = require("mongoose");

 let schema = new mongoose.Schema(
   {
     name: {
       type: String,
       required: true,
     },
     phoneNumber: {
      type: String,
      required: true,
     },
     message: {
      type: String,
      default: ''
     }
   },
   { timestamps: true }
 );
 
 module.exports = mongoose.model("contactUser", schema, "contactUser");
 