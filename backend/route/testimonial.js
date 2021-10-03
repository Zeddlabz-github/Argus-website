/**
 * @author krish
 */

const express = require('express');

const router = express.Router();
const {
  saveData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
  getPhoto,
} = require('../controller/testimonial');
const { isSignedIn, isValidToken, isAdmin } = require('../controller/auth');

router.post('/testimonial/create', isSignedIn, isValidToken, isAdmin, saveData);
router.get('/testimonial/get/:id', getDataById);
router.get('/testimonial/get-all', getAllData);
router.put(
  '/testimonial/update/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  updateDataById,
);
router.get('/testimonal/get-photo/:id', getPhoto);
router.delete(
  '/testimonial/delete/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteDataById,
);

module.exports = router;
