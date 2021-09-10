/**
 * @author krish
 */

 const mongoose = require("mongoose");

 let schema = new mongoose.Schema(
   {
     phoneNumber: String,
     address: String,
     email: String
   },
   { timestamps: true }
 );
 
 module.exports = mongoose.model("contact", schema, "contact");
 