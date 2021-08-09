/**
 * @author krish
 */

const express = require("express");
const router = express.Router();
const {
  saveData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
} = require("../controller/testimonial");
const { isSignedIn, isValidToken, isAdmin } = require("../controller/auth");

router.post("/testimonial/create", saveData);
router.get("/testimonial/get/:id", getDataById);
router.get("/testimonial/get-all", getAllData);
router.put(
  "/testimonial/update/:id",
  isSignedIn,
  isValidToken,
  isAdmin,
  updateDataById
);
router.delete(
  "/testimonial/delete/:id",
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteDataById
);

module.exports = router;
