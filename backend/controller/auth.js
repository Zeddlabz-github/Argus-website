/**
 * @author krish
 */

const User = require('../model/user.js');
const { validationResult } = require('express-validator');
let jwt = require('jsonwebtoken');
let expressJwt = require('express-jwt');
const user = require('../model/user.js');

const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const { email } = req.body;

  //create
  await User.findOne({ email }, (err, user) => {
    if (err || user) {
      return res.status(400).json({
        error: 'E-Mail already has been registered',
        suggestion: 'Try some other E-mail',
      });
    } else {
      const user = new User(req.body);
      user.save((err, user) => {
        if (err) {
          return res.status(400).json({
            err: 'Failed to add user in DB',
          });
        }
        res.json({
          id: user._id,
          email: user.email,
          password: user.encrypted_password,
        });
      });
    }
  });
};

const update = async (req, res) => {
  let {
    id,
    name,
    lastname,
    phone,
    address,
    city,
    province,
    isElilligibeToWorkInCanada,
    eligibilityType,
    isValidGuardLicence,
    securityGuardLicenseNo,
    isDrive,
    levelOfEducation,
    isEducationInCanada,
    isPriorExperienceInCanada,
    yearsOfExperience,
  } = req.body;
  if (name === undefined && lastname === undefined && phone === undefined) {
    res.json({
      message: 'Enter atleast one updation field',
    });
  } else {
    await user.findOne({ _id: id }).exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: 'User Not Found!',
        });
      }
      //personal info
      if (name === undefined && data.name !== null) {
        name = data.name;
      }
      if (lastname === undefined && data.lastname !== null) {
        lastname = data.lastname;
      }
      if (phone === undefined && data.phone !== null) {
        phone = data.phone;
      }
      if (address === undefined && data.address !== null) {
        address = data.address;
      }
      if (city === undefined && data.city !== null) {
        city = data.city;
      }
      if (province === undefined && data.province !== null) {
        province = data.province;
      }

      //work status
      if (
        isElilligibeToWorkInCanada === undefined &&
        data.isElilligibeToWorkInCanada !== null
      ) {
        isElilligibeToWorkInCanada = data.isElilligibeToWorkInCanada;
      }
      if (eligibilityType === undefined && data.eligibilityType !== null) {
        eligibilityType = data.eligibilityType;
      }
      if (
        isValidGuardLicence === undefined &&
        data.isValidGuardLicence !== null
      ) {
        isValidGuardLicence = data.isValidGuardLicence;
      }
      if (
        securityGuardLicenseNo === undefined &&
        data.securityGuardLicenseNo !== null
      ) {
        securityGuardLicenseNo = data.securityGuardLicenseNo;
      }
      if (isDrive === undefined && data.isDrive !== null) {
        isDrive = data.isDrive;
      }

      //education
      if (levelOfEducation === undefined && data.levelOfEducation !== null) {
        levelOfEducation = data.levelOfEducation;
      }
      if (
        isEducationInCanada === undefined &&
        data.isEducationInCanada !== null
      ) {
        isEducationInCanada = data.isEducationInCanada;
      }

      //experience
      if (
        isPriorExperienceInCanada === undefined &&
        data.isPriorExperienceInCanada !== null
      ) {
        isPriorExperienceInCanada = data.isPriorExperienceInCanada;
      }
      if (yearsOfExperience === undefined && data.yearsOfExperience !== null) {
        yearsOfExperience = data.yearsOfExperience;
      }

      user
        .updateOne(
          { _id: id },
          {
            $set: {
              name: name,
              lastname: lastname,
              phone: phone,
              address: address,
              city: city,
              province: province,
              isElilligibeToWorkInCanada: isElilligibeToWorkInCanada,
              eligibilityType: eligibilityType,
              isValidGuardLicence: isValidGuardLicence,
              securityGuardLicenseNo: securityGuardLicenseNo,
              isDrive: isDrive,
              levelOfEducation: levelOfEducation,
              isEducationInCanada: isEducationInCanada,
              isPriorExperienceInCanada: isPriorExperienceInCanada,
              yearsOfExperience: yearsOfExperience,
            },
          }
        )
        .then(() => {
          res.json({
            message: 'User Updated Successfully!',
          });
        })
        .catch(() => {
          res.json({
            error: 'User Updation Failed!',
          });
        });
    });
  }
};

const signin = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const { email, password } = req.body;

  await User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "E-Mail doesn't exist in DB!",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'E-mail and Password does not match',
      });
    }

    let expiryTime = new Date();
    expiryTime.setMonth(expiryTime.getMonth() + 6);
    const exp = parseInt(expiryTime.getTime() / 1000);

    const token = jwt.sign({ _id: user._id, exp: exp }, process.env.SECRET);

    res.cookie('Token', token, { expire: new Date() + 9999 });

    user.salt = undefined;
    user.__v = undefined;
    return res.json({ token, user });
  });
};

const signout = (req, res) => {
  res.clearCookie('Token');

  res.json({
    message: 'User Signed Out Sucessfully',
  });
};

const isSignedIn = expressJwt({
  secret: process.env.SECRET,
  algorithms: ['HS256', 'RS256'],
  userProperty: 'auth',
});

//middlewares
const isValidToken = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Authentication Failed' });
  }
  next();
};

const isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!checker) {
    return res.status(403).json({
      error: 'ACCESS DENIED',
    });
  }
  next();
};

const isAdmin = (req, res, next) => {
  let authId = req.auth._id;

  if (authId) {
    User.findById(authId).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'No user was found in DB',
        });
      }
      if (user.role === 2 || user.role === 3) {
        next();
      } else {
        return res.status(401).json({
          error: 'Not an admin',
        });
      }
    });
  }
};

module.exports = {
  signup,
  signin,
  update,
  signout,
  isSignedIn,
  isValidToken,
  isAuthenticated,
  isAdmin,
};
