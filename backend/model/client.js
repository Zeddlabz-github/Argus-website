/**
 * @author krish
 */

const mongoose = require('mongoose');

let schema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      trim: true,
      required: true,
    },
    logo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('client', schema, 'client');
