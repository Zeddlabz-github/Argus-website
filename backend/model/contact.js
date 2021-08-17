/**
 * @author krish
 */

 const mongoose = require("mongoose");

 var schema = new mongoose.Schema(
   {
     phoneNumber: String,
     address: String,
     email: String
   },
   { timestamps: true }
 );
 
 module.exports = mongoose.model("contact", schema, "contact");
 