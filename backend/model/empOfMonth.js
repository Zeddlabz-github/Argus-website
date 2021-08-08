/**
 * @author krish
 */

const mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    empName: String,
    empImage: {
      data: Buffer,
      contentType: String,
    },
    empDesc: String,
    skills: Array,
    description: String,
    instructorName: String,
    instructorRole: String,
    instructorImage: {
      data: Buffer,
      contentType: String,
    },
    month: {
      type: Number,
      length: 2,
    },
    year: {
      type: Number,
      length: 4,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("empOfMonth", schema, "empOfMonth");
