/**
 * @author krish
 */

const express = require('express');

const router = express.Router();
const { check } = require('express-validator');
const {
  saveData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
} = require('../controller/subscription');
const { isSignedIn, isValidToken, isAdmin } = require('../controller/auth');

router.post(
  '/subscription/save',
  check('email').isEmail().withMessage('Please Provide a valid E-Mail !'),
  saveData,
);
router.get(
  '/subscription/get-all',
  isSignedIn,
  isValidToken,
  isAdmin,
  getAllData,
);
router.get(
  '/subscription/get/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  getDataById,
);
router.put(
  '/subscription/update/:id',
  check('email').isEmail().withMessage('Please Provide a valid E-Mail !'),
  isSignedIn,
  isValidToken,
  isAdmin,
  updateDataById,
);
router.delete(
  '/subscription/delete/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteDataById,
);

module.exports = router;
