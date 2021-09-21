/**
 * @author krish
 */

const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    empName: String,
    empDesc: String,
    skills: Array,
    description: String,
    instructorName: String,
    instructorRole: String,
    title: String,
    empImage: {
      name:  {
        type: String,
        default: null
      },
      data: {
        type: Buffer,
        default: null
      },
      contentType: {
        type: String,
        default: null
      },
    },
    instructorImage: {
      name:  {
        type: String,
        default: null
      },
      data: {
        type: Buffer,
        default: null
      },
      contentType: {
        type: String,
        default: null
      },
    },
    instructorSign: {
      name:  {
        type: String,
        default: null
      },
      data: {
        type: Buffer,
        default: null
      },
      contentType: {
        type: String,
        default: null
      },
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
