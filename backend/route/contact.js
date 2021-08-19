/**
 * @author krish
 */

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { updateData, getData } = require("../controller/contact");
const { isSignedIn, isValidToken, isAdmin } = require("../controller/auth");

router.get("/contact/get", getData);
router.put(
  "/contact/update",
  check("email").isEmail().withMessage("Please Provide a valid E-Mail !"),
  isSignedIn,
  isValidToken,
  isAdmin,
  updateData
);

module.exports = router;
