/**
 * @author krish
 */

const express = require('express');
const router = express.Router();
const {
  saveData,
  getUserData,
  getOtherUserData,
  getAllUserData,
  deleteDataById,
  deleteAllDataByUserId,
} = require('../controller/userActivity');
const { isSignedIn, isValidToken, isAdmin } = require('../controller/auth');

router.post(
  '/user-activity/create/:userId',
  isSignedIn,
  isValidToken,
  isAdmin,
  saveData
);
router.get('/user-activity/get', isSignedIn, isValidToken, getUserData);
router.get(
  '/user-activity/get-user',
  isSignedIn,
  isValidToken,
  isAdmin,
  getOtherUserData
);
router.get(
  '/user-activity/get-all',
  isSignedIn,
  isValidToken,
  isAdmin,
  getAllUserData
);

router.delete(
  '/user-activity/delete/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteDataById
);

router.delete(
  '/user-activity/delete-user/:userId',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteAllDataByUserId
);

module.exports = router;
