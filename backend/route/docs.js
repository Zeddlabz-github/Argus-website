/**
 * @author krish
 */

const express = require('express');
const router = express.Router();
const {
  uploadData,
  updateData,
  getData,
  getPhoto,
  deleteDataById,
  deleteDocs,
} = require('../controller/docs');
const { isSignedIn, isValidToken, isAdmin } = require('../controller/auth');

router.post('/docs/upload', isSignedIn, isValidToken, uploadData);
router.put('/docs/update', isSignedIn, isValidToken, updateData);
router.get('/docs/get', isSignedIn, isValidToken, getData);
router.get('/docs/get-photo/:id', isSignedIn, isValidToken, getPhoto);
router.delete(
  '/docs/delete/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteDataById
);

router.delete(
  '/docs/delete-docs',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteDocs
);

module.exports = router;
