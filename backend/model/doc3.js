/**
 * @author krish
 */

const mongoose = require('mongoose');

var schema = new mongoose.Schema(
  {
    userId: mongoose.Schema.ObjectId,
    doc: {
      name: String,
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('doc3', schema, 'doc3');
