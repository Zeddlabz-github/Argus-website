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
  getPhoto,
} = require("../controller/team");
const { isSignedIn, isValidToken, isAdmin } = require("../controller/auth");

router.post("/team/create", isSignedIn, isValidToken, isAdmin, saveData);
router.get("/team/get/:id", getDataById);
router.get("/team/get-all", getAllData);
router.put(
  "/team/update/:id",
  isSignedIn,
  isValidToken,
  isAdmin,
  updateDataById
);
router.get("/team/get-photo/:id", getPhoto);
router.delete(
  "/team/delete/:id",
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteDataById
);

module.exports = router;
