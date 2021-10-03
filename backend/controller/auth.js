/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-else-return */
/**
 * @author krish
 */
const fetch = (...args) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { OAuth2Client } = require('google-auth-library');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../model/user.js');
const user = require('../model/user.js');

const client = new OAuth2Client(
  '687463143304-kpg02h4gpk2ul6a4fk3fnsbpp1hg241i.apps.googleusercontent.com',
);

const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const { email } = req.body;
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
            error: 'Failed to add user in DB',
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
  const {
    name,
    lastname,
    dateOfBirth,
    gender,
    weight,
    height,
    eyeColor,
    hairColor,
    languagesKnown,
    phone,
    homePhone,
    address,
    country,
    city,
    street,
    streetNumber,
    suite,
    province,
    postalCode,
    isElilligibeToWorkInCanada,
    eligibilityType,
    isValidGuardLicence,
    securityGuardLicenseNo,
    isDrive,
    levelOfEducation,
    isEducationInCanada,
    isPriorExperienceInCanada,
    yearsOfExperience,
    category,
    companyName,
    companyAddress,
    employeeDuration,
    isActive,
    reasonForLeaving,
    hasCriminalRecord,
    hasVechicle,
    hasLicenseToDrive,
  } = req.body;

  const id = req.auth._id;
  await user.findOne({ _id: id }).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({
        error: 'User Not Found!',
      });
    }

    const arr = [];
    arr.push(Object.keys(req.body));

    arr
      .filter((val) => val !== employeeDuration)
      .forEach((ele) => {
        if (ele === undefined && data[`${ele}`] !== null) {
          ele = data[`${ele}`];
        }
      });

    const employeeDt = {
      from: null,
      to: null,
    };

    if (employeeDuration !== undefined) {
      if (employeeDuration.from !== undefined) {
        employeeDt.from = employeeDuration.from;
      }
      if (employeeDuration.to !== undefined) {
        employeeDt.to = employeeDuration.to;
      }
    } else {
      if (data.employeeDuration.from !== null) {
        employeeDt.from = data.employeeDuration.from;
      }
      if (data.employeeDuration.to !== null) {
        employeeDt.to = data.employeeDuration.to;
      }
    }

    user
      .updateOne(
        { _id: id },
        {
          $set: {
            name,
            lastname,
            dateOfBirth,
            gender,
            weight,
            height,
            eyeColor,
            hairColor,
            languagesKnown,
            phone,
            homePhone,
            address,
            country,
            city,
            street,
            streetNumber,
            suite,
            province,
            postalCode,
            isElilligibeToWorkInCanada,
            eligibilityType,
            isValidGuardLicence,
            securityGuardLicenseNo,
            isDrive,
            levelOfEducation,
            isEducationInCanada,
            isPriorExperienceInCanada,
            yearsOfExperience,
            category,
            companyName,
            companyAddress,
            employeeDuration: employeeDt,
            isActive,
            reasonForLeaving,
            hasCriminalRecord,
            hasVechicle,
            hasLicenseToDrive,
          },
        },
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

    const expiryTime = new Date();
    expiryTime.setMonth(expiryTime.getMonth() + 6);
    // eslint-disable-next-line radix
    const exp = parseInt(expiryTime.getTime() / 1000);

    const token = jwt.sign({ _id: user._id, exp }, process.env.SECRET);

    res.cookie('Token', token, { expire: new Date() + 9999 });

    user.salt = undefined;
    user.__v = undefined;
    return res.json({ token, user });
  });
};

const googlelogin = (req, res) => {
  try {
    const { idToken } = req.body;
    client
      .verifyIdToken({
        idToken,
        audience:
          '687463143304-kpg02h4gpk2ul6a4fk3fnsbpp1hg241i.apps.googleusercontent.com',
      })
      .then((response) => {
        // eslint-disable-next-line object-curly-newline
        const { email_verified, email, given_name, family_name } =
          response.payload;
        if (email_verified) {
          User.findOne({ email }).exec((err, user) => {
            if (err) {
              return res.status(400).json({
                error: 'Login failed try again',
              });
            } else if (user) {
              const expiryTime = new Date();
              expiryTime.setMonth(expiryTime.getMonth() + 6);
              // eslint-disable-next-line radix
              const exp = parseInt(expiryTime.getTime() / 1000);

              const token = jwt.sign(
                { _id: user._id, exp },
                process.env.SECRET,
              );

              res.cookie('Token', token, { expire: new Date() + 9999 });

              user.salt = undefined;
              user.__v = undefined;
              return res.json({ token, user });
            } else {
              const encrypted_password = idToken + email;
              const userNew = new User({
                email,
                name: given_name,
                lastname: family_name,
                encrypted_password,
              });
              userNew.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: 'Failed to add user in DB',
                  });
                } else {
                  const expiryTime = new Date();
                  expiryTime.setMonth(expiryTime.getMonth() + 6);
                  // eslint-disable-next-line radix
                  const exp = parseInt(expiryTime.getTime() / 1000);

                  const token = jwt.sign(
                    { _id: data._id, exp },
                    process.env.SECRET,
                  );

                  res.cookie('Token', token, { expire: new Date() + 9999 });

                  data.salt = undefined;
                  data.__v = undefined;
                  return res.json({ token, user: data });
                }
              });
            }
          });
        }
      });
  } catch (error) {
    return res.status(400).json({
      error: 'Login failed try again',
    });
  }
};

const facebooklogin = async (req, res) => {
  try {
    const { userId, access_token } = req.body;
    const urlGraphFacebook = `https://graph.facebook.com/${userId}/?fields=id,first_name,last_name,email&access_token=${access_token}`;
    const response = await fetch(urlGraphFacebook, {
      method: 'GET',
    });
    // eslint-disable-next-line object-curly-newline
    const { email, first_name, last_name, id } = await response.json();
    if (id === userId) {
      User.findOne({ email }).exec((err, user) => {
        if (err) {
          return res.status(400).json({
            error: 'Login failed try again',
          });
        } else if (user) {
          const expiryTime = new Date();
          expiryTime.setMonth(expiryTime.getMonth() + 6);
          // eslint-disable-next-line radix
          const exp = parseInt(expiryTime.getTime() / 1000);

          const token = jwt.sign({ _id: user._id, exp }, process.env.SECRET);

          res.cookie('Token', token, { expire: new Date() + 9999 });

          user.salt = undefined;
          user.__v = undefined;
          return res.json({ token, user });
        } else {
          const encrypted_password = access_token + email;
          const userNew = new User({
            email,
            name: first_name,
            lastname: last_name,
            encrypted_password,
          });
          userNew.save((err, data) => {
            if (err) {
              return res.status(400).json({
                error: 'Failed to add user in DB',
              });
            } else {
              const expiryTime = new Date();
              expiryTime.setMonth(expiryTime.getMonth() + 6);
              // eslint-disable-next-line radix
              const exp = parseInt(expiryTime.getTime() / 1000);

              const token = jwt.sign(
                { _id: data._id, exp },
                process.env.SECRET,
              );

              res.cookie('Token', token, { expire: new Date() + 9999 });

              data.salt = undefined;
              data.__v = undefined;
              return res.json({ token, user: data });
            }
          });
        }
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: 'Login failed try again',
    });
  }
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

// middlewares
const isValidToken = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Authentication Failed' });
  }
  next();
};

const isAuthenticated = (req, res, next) => {
  const checker = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!checker) {
    return res.status(403).json({
      error: 'ACCESS DENIED',
    });
  }
  next();
};

const isEmployee = (req, res, next) => {
  const authId = req.auth._id;

  if (authId) {
    User.findById(authId).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'No user was found in DB',
        });
      }
      if (user.role === 2) {
        next();
      } else {
        return res.status(401).json({
          error: 'Not an Employee!',
        });
      }
    });
  }
};

const isAdmin = (req, res, next) => {
  const authId = req.auth._id;

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
  isEmployee,
  googlelogin,
  facebooklogin,
};
