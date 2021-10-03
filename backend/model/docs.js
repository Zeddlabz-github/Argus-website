/**
 * @author krish
 */

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    userId: mongoose.Schema.ObjectId,
    doc1: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc2: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc3: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc4: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc5: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc6: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc7: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc8: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc9: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
    doc10: {
      name: {
        type: String,
        default: null,
      },
      data: {
        type: Buffer,
        default: null,
      },
      contentType: {
        type: String,
        default: null,
      },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('userDocs', schema, 'userDocs');
