/**
 * @author krish
 */

const express = require('express');

const router = express.Router();
const {
  saveData,
  getData,
  getDataById,
  getDataByMonth,
  deleteDataById,
  getAllData,
  updateDataById,
  getPhoto,
} = require('../controller/empOfMonth');
const { isSignedIn, isValidToken, isAdmin } = require('../controller/auth');

router.post('/eom/create', isSignedIn, isValidToken, isAdmin, saveData);
router.get('/eom/get', getData);
router.get('/eom/get-id/:id', getDataById);
router.get('/eom/get-photo/:id', getPhoto);
router.get(
  '/eom/get-month/:month',
  isSignedIn,
  isValidToken,
  isAdmin,
  getDataByMonth,
);
router.get('/eom/get-all', isSignedIn, isValidToken, isAdmin, getAllData);
router.put(
  '/eom/update/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  updateDataById,
);
router.delete(
  '/eom/delete/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteDataById,
);

module.exports = router;
