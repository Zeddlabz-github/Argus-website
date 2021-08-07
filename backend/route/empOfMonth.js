/**
 * @author krish
 */

const express = require("express");
const router = express.Router();
const { saveData, getData, deleteData } = require("../controller/empOfMonth");

router.post("/eom/create", saveData);
router.get("/eom/get", getData);
router.delete("/eom/delete", deleteData);

module.exports = router;
