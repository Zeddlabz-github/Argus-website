/**
 * @author krish
 */

const mongoose = require('mongoose');

var schema = new mongoose.Schema(
  {
    userId: mongoose.Schema.ObjectId,
    doc1: {
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
    doc2: {
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
    doc3: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('userDocs', schema, 'userDocs');
