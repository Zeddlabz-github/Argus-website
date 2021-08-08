/**
 * @author krish
 */

const express = require("express");
const router = express.Router();
const {
  saveData,
  getData,
  getDataById,
  getDataByMonth,
  deleteDataById,
  getAllData,
  updateDataById,
} = require("../controller/empOfMonth");

router.post("/eom/create", saveData);
router.get("/eom/get", getData);
router.get("/eom/get-id/:id", getDataById);
router.get("/eom/get-month/:month", getDataByMonth);
router.get("/eom/get-all", getAllData);
router.put("/eom/update/:id", updateDataById);
router.delete("/eom/delete", deleteDataById);

module.exports = router;
