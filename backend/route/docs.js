/**
 * @author krish
 */

const express = require("express");
const router = express.Router();
const {
  uploadData,
  updateData,
  getDataById,
  getData,
  getAllData,
  deleteDataById,
} = require("../controller/docs");
const { isSignedIn, isValidToken, isAdmin } = require("../controller/auth");

router.post("/docs/upload", isSignedIn, isValidToken, uploadData);
router.put("/docs/update", isSignedIn, isValidToken, updateData);
router.get("/docs/get", isSignedIn, isValidToken, getData);
router.get("/docs/get/:id",isSignedIn, isValidToken, getDataById);
router.get("/docs/get-all", isSignedIn, isValidToken, isAdmin, getAllData);
router.delete("/docs/delete/:id",isSignedIn, isValidToken, isAdmin, deleteDataById);

module.exports = router;
