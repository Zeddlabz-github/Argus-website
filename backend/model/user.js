/**
 * @author krish
 */

const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");

var UserSchema = new mongoose.Schema(
  {
    //personal info
    name: {
      type: String,
      maxlength: 32,
      trim: true,
      default: null,
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true,
      default: null,
    },
    phone: {
      type: Number,
      maxlength: 10,
      default: null,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
      default: null,
    },
    city: {
      type: String,
      trim: true,
      default: null,
    },
    province: {
      type: String,
      trim: true,
      default: null,
    },

    encrypted_password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    role: {
      type: Number,
      default: 1,
    },

    //work status
    isElilligibeToWorkInCanada: {
      type: String,
      maxlength: 3,
      default: null,
    },
    eligibilityType: {
      type: String,
      trim: true,
      default: null,
    },
    isValidGuardLicence: {
      type: String,
      maxlength: 3,
      default: null,
    },
    securityGuardLicenseNo: {
      type: String,
      trim: true,
      default: null,
    },
    isDrive: {
      type: String,
      maxlength: 3,
      default: null,
    },

    //Education
    levelOfEducation: {
      type: String,
      trim: true,
      default: null,
    },
    isEducationInCanada: {
      type: String,
      maxlength: 3,
      default: null,
    },

    //Experience
    isPriorExperienceInCanada: {
      type: String,
      maxlength: 3,
      default: null,
    },
    yearsOfExperience: {
      type: Number,
      maxlength: 2,
      default: null,
    },
  },
  { timestamps: true }
);

UserSchema.virtual("password")

  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encrypted_password = this.securePassword(password);
  })

  .get(function () {
    return this._password;
  });

UserSchema.methods = {
  authenticate: function (password) {
    return this.securePassword(password) === this.encrypted_password;
  },

  securePassword: function (password) {
    if (!password) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("users", UserSchema, "users");
