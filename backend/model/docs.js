/**
 * @author krish
 */

const mongoose = require('mongoose');

var schema = new mongoose.Schema(
  {
    userId: mongoose.Schema.ObjectId,
    doc1: {
      name: String,
      data: Buffer,
      contentType: String,
    },
    doc2: {
      name: String,
      data: Buffer,
      contentType: String,
    },
    doc3: {
      name: String,
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('userDocs', schema, 'userDocs');
