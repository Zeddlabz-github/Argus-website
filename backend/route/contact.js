/**
 * @author krish
 */

 const express = require("express");
 const router = express.Router();
 const {
    updateData,
    getData
 } = require("../controller/contact");
 const { isSignedIn, isValidToken, isAdmin } = require("../controller/auth");
 

 router.get("/contact/get", getData);
 router.put(
   "/contact/update", isSignedIn, isValidToken, isAdmin, updateData
 );

 
 module.exports = router;
 