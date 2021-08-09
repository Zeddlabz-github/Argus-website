const express = require("express");
const router = express.Router();

const { getUserById, getUser, getAllUsers } = require("../controller/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get(
  "/user/all/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllUsers
);

module.exports = router;
