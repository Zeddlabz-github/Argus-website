/**
 * @author krish
 */

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  signup,
  signin,
  update,
  signout,
  isSignedIn,
  isValidToken,
  isAdmin,
  googleLogin,
  facebookLogin,
} = require('../controller/auth');

router.post(
  '/signup',
  [
    check('email').isEmail().withMessage('Please Provide a valid E-Mail !'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password length should be minimum of 8 characters'),
  ],
  signup
);

router.post(
  '/signin',
  [
    check('email').isEmail().withMessage('Please Provide a valid E-Mail !'),
    check('password')
      .isLength({ min: 1 })
      .withMessage('Password field is required'),
  ],
  signin
);

router.post('/googlelogin', googleLogin);

router.post('/facebooklogin', facebookLogin);

router.put(
  '/user/update',
  [check('id').isUUID().withMessage('Please Provide id')],
  isSignedIn,
  isValidToken,
  isAdmin,
  update
);

router.get('/signout', signout);

module.exports = router;
