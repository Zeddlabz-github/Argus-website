const express = require("express");
const router = express.Router();

const { getUserById, getUser, getAllUsers } = require("../controller/user");
const { isSignedIn, isAuthenticated, isAdmin, isValidToken } = require("../controller/auth");

router.param("userId", getUserById);
router.get("/user/get/:userId", isSignedIn, isAuthenticated, getUser);
router.get(
  "/user/get-all",
  isSignedIn,
  isValidToken,
  isAdmin,
  getAllUsers
);

module.exports = router;
