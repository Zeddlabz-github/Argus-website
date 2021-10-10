/**
 * @author krish
 */

const userModel = require('../model/user.js');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const expressJwt = require('express-jwt');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { OAuth2Client } = require('google-auth-library');

const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const { email } = req.body;

  try {
    await userModel.findOne({ email }, (err, user) => {
      if (err || user) {
        return res.status(400).json({
          error: 'E-Mail already has been registered',
          suggestion: 'Try some other E-mail',
        });
      } else {
        const user = new userModel(req.body);
        user.save((err, user) => {
          if (err) {
            return res.status(400).json({
              err: 'Failed to add user in DB',
            });
          }
          res.status(200).json({
            message: 'User Signed Up Successfully!',
            data: {
              id: user._id,
              email: user.email,
              password: user.encrypted_password,
            },
          });
        });
      }
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info(`User Signed Up with an Email - ${email}`);
  }
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

  try {
    await user.findOne({ _id: id }).exec((err, data) => {
      if (err || !data) {
        return res.status(404).json({
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
          }
        )
        .then(() => {
          res.status(200).json({
            message: 'User Updated Successfully!',
          });
        })
        .catch((err) => {
          logger.error(err);
          res.status(400).json({
            error: 'User Updation Failed!',
          });
        });
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info('User Updation Function is Executed');
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

  try {
    await userModel.findOne({ email }, (err, user) => {
      if (err || !user) {
        return res.status(404).json({
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
      const exp = parseInt(expiryTime.getTime() / 1000);
      const token = jwt.sign({ _id: user._id, exp: exp }, process.env.SECRET);

      res.cookie('Token', token, { expire: new Date() + 9999 });

      user.salt = undefined;
      user.__v = undefined;
      return res.status(200).json({
        message: 'User Logged in Successfully!',
        token,
        user,
      });
    });
  } catch (err) {
    logger.error(err);
  } finally {
    logger.info(`User Signed in - ${email}`);
  }
};

const signout = (req, res) => {
  res.clearCookie('Token');

  res.status(200).json({
    message: 'User Signed Out Sucessfully',
  });
};

const googleLogin = (req, res) => {
  try {
    const { idToken } = req.body;
    const client = new OAuth2Client(
      '687463143304-kpg02h4gpk2ul6a4fk3fnsbpp1hg241i.apps.googleusercontent.com'
    );
    client
      .verifyIdToken({
        idToken,
        audience:
          '687463143304-kpg02h4gpk2ul6a4fk3fnsbpp1hg241i.apps.googleusercontent.com',
      })
      .then((response) => {
        const { email_verified, email, given_name, family_name } =
          response.payload;
        if (email_verified) {
          userModel.findOne({ email }).exec((err, user) => {
            if (err) {
              return res.status(400).json({
                error: 'Login failed try again',
              });
            } else if (user) {
              const expiryTime = new Date();
              expiryTime.setMonth(expiryTime.getMonth() + 6);
              const exp = parseInt(expiryTime.getTime() / 1000);

              const token = jwt.sign(
                { _id: user._id, exp },
                process.env.SECRET
              );

              res.cookie('Token', token, { expire: new Date() + 9999 });

              user.salt = undefined;
              user.__v = undefined;
              return res.status(200).json({
                message: 'User Logged in Successfully from Google!',
                token,
                user,
              });
            } else {
              const encrypted_password = idToken + email;
              const userNew = new userModel({
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
                  const exp = parseInt(expiryTime.getTime() / 1000);

                  const token = jwt.sign(
                    { _id: data._id, exp },
                    process.env.SECRET
                  );

                  res.cookie('Token', token, { expire: new Date() + 9999 });

                  data.salt = undefined;
                  data.__v = undefined;
                  return res.status(200).json({
                    message: 'User Logged in Successfully from Google!',
                    token,
                    user,
                  });
                }
              });
            }
          });
        }
      });
  } catch (err) {
    logger.error(err);
    return res.status(400).json({
      error: 'Login failed try again',
    });
  } finally {
    logger.info('User Logged in from Google!');
  }
};

const facebookLogin = async (req, res) => {
  try {
    const { userId, access_token } = req.body;
    const urlGraphFacebook = `https://graph.facebook.com/${userId}/?fields=id,first_name,last_name,email&access_token=${access_token}`;
    const response = await fetch(urlGraphFacebook, {
      method: 'GET',
    });
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
              const exp = parseInt(expiryTime.getTime() / 1000);

              const token = jwt.sign(
                { _id: data._id, exp },
                process.env.SECRET
              );

              res.cookie('Token', token, { expire: new Date() + 9999 });

              data.salt = undefined;
              data.__v = undefined;
              return res.status(200).json({
                message: 'User Logged in Successfully from Facebook!',
                token,
                user: data,
              });
            }
          });
        }
      });
    }
  } catch (err) {
    logger.error(err);
    return res.status(400).json({
      error: 'Login failed try again',
    });
  } finally {
    logger.info('User Logged in from Facebook!');
  }
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
    userModel.findById(authId).exec((err, user) => {
      if (err || !user) {
        return res.status(404).json({
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
    userModel.findById(authId).exec((err, user) => {
      if (err || !user) {
        return res.status(404).json({
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
  googleLogin,
  facebookLogin,
};
